import React, { useState, useEffect } from 'react';
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js';

// Register necessary components, including DoughnutController
Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

export default function Tax_Calculator() {
    const [income, setIncome] = useState(800000); // Default value
    const [deduction80c, setDeduction80c] = useState(100000);
    const [deduction80d, setDeduction80d] = useState(20000);
    const [taxChart, setTaxChart] = useState(null);

    useEffect(() => {
        // Initialize tax calculation and chart on load
        calculateTax();
    }, [income, deduction80c, deduction80d]);

    const updateLabel = (id, value) => {
        const label = `${id}Label`;
        document.getElementById(label).innerText = `₹${value.toLocaleString()}`;
    };

    const syncIncomeFromSlider = (e) => {
        const value = parseInt(e.target.value);
        setIncome(value);
    };

    const syncIncomeFromInput = (e) => {
        let value = parseInt(e.target.value);
        value = Math.min(Math.max(value, 100000), 2500000); // Clamp to valid range
        setIncome(value);
    };

    const calculateTaxAmount = (income) => {
        let tax = 0;
        if (income <= 250000) {
            tax = 0;
        } else if (income <= 500000) {
            tax = (income - 250000) * 0.05;
        } else if (income <= 1000000) {
            tax = 12500 + (income - 500000) * 0.2;
        } else {
            tax = 112500 + (income - 1000000) * 0.3;
        }
        return Math.round(tax * 1.04); // Add 4% cess
    };

    const renderChart = (original, reduced) => {
        const ctx = document.getElementById("taxChart").getContext("2d");

        if (taxChart) taxChart.destroy();

        const chart = new Chart(ctx, {
            type: "doughnut",  // This should work after registering the doughnut controller
            data: {
                labels: ["Tax Saved", "Tax Payable"],
                datasets: [
                    {
                        data: [original - reduced, reduced],
                        backgroundColor: ["#6c9cce", "#1765ab"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                            usePointStyle: true,
                            pointStyle: 'rect' // ✅ changed to square
                        }
                    },
                    title: {
                        display: true,
                        text: "Tax Calculation",
                    },
                },
            },
        });

        setTaxChart(chart);
    };

    const calculateTax = () => {
        const totalIncome = parseInt(income);
        let deduction80cVal = parseInt(deduction80c);
        let deduction80dVal = parseInt(deduction80d);

        deduction80cVal = Math.min(deduction80cVal, 150000);
        deduction80dVal = Math.min(deduction80dVal, 50000);

        const totalDeductions = deduction80cVal + deduction80dVal;
        const taxableIncome = Math.max(0, totalIncome - totalDeductions);

        const originalTaxAmount = calculateTaxAmount(totalIncome);
        const reducedTaxAmount = calculateTaxAmount(taxableIncome);
        const taxSavedAmount = originalTaxAmount - reducedTaxAmount;

        renderChart(originalTaxAmount, reducedTaxAmount);

        // Update the result box
        document.getElementById("resultBox").innerHTML = `
            <div class="results" id="results">
                <div class="output_grid">
                    <h6>Tax before deductions:</h6>
                    <h6>₹ <span>${originalTaxAmount.toLocaleString()}</span></h6>
                </div>
                <div class="output_grid">
                    <h6>Tax after deductions:</h6>
                    <h6>₹ <span>${reducedTaxAmount.toLocaleString()}</span></h6>
                </div>
                <div class="output_grid">
                    <h6>Tax Saved:</h6>
                    <h6>₹ <span>${taxSavedAmount.toLocaleString()}</span></h6>
                </div>
            </div>
        `;
    };

    return (
        <>
            <div className="calculator_page">
                <div className="section-bg-body"></div>

                <section className="gradient-bg">
                    <div className="top-text">
                        <div className="top-tag">
                            <h1 className="tag-name">Tax Calculator</h1>
                        </div>
                        <p className="white-text">Let’s Make Tax Time Easy! 🧮</p>
                        <p className="subtitle">
                            Confused about how much tax you owe? Our Tax Calculator takes away the guesswork.<br />
                            Just enter your income and deductions — we’ll tell you exactly what you need to know.
                        </p>
                    </div>
                    <div className="calculator">
                        <div className="main_container_grid">
                            <div className="selection_section">
                                <div className="label_grid d-flex">
                                    <label>Annual Income (₹):</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="incomeInput"
                                        min="100000"
                                        max="2500000"
                                        step="10000"
                                        value={income}
                                        onChange={syncIncomeFromInput}
                                    />
                                </div>

                                <input
                                    type="range"
                                    id="income"
                                    min="100000"
                                    max="2500000"
                                    step="10000"
                                    value={income}
                                    onChange={syncIncomeFromSlider}
                                />
                                <div className="slider-value" id="incomeLabel" style={{ display: "none" }}>
                                    ₹ {income.toLocaleString()}
                                </div>

                                <label>
                                    Deductions under 80C: <output id="deduction80cLabel">₹ {deduction80c}</output>
                                </label>
                                <input
                                    type="range"
                                    id="deduction80c"
                                    min="0"
                                    max="150000"
                                    step="5000"
                                    value={deduction80c}
                                    onChange={(e) => {
                                        setDeduction80c(e.target.value);
                                    }}
                                />

                                <label>
                                    Deductions under 80D (₹): <output id="deduction80dLabel">₹ {deduction80d}</output>
                                </label>
                                <input
                                    type="range"
                                    id="deduction80d"
                                    min="0"
                                    max="50000"
                                    step="1000"
                                    value={deduction80d}
                                    onChange={(e) => {
                                        setDeduction80d(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="output_div">
                                <canvas id="taxChart" width="400" height="300"></canvas>
                                <div className="result" id="resultBox"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
