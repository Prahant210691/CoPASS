import React, { useState, useEffect, useRef } from 'react';
import { Chart, ArcElement, DoughnutController, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
Chart.register(ArcElement, DoughnutController, Tooltip, Legend);

export default function PersonalLoan_Calculator() {

  const [amount, setAmount] = useState(50000); // Default: 50000
  const [rate, setRate] = useState(6.5);        // Default: 6.5%
  const [term, setTerm] = useState(15);          // Default: 15 years

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // Calculate Loan details
  const calculateLoan = () => {
    const principal = amount;
    const annualRate = rate;
    const years = term;
    const months = years * 12;
    const monthlyRate = annualRate / 100 / 12;

    const x = Math.pow(1 + monthlyRate, months);
    const monthly = (principal * x * monthlyRate) / (x - 1);
    const totalPay = monthly * months;
    const totalInt = totalPay - principal;

    setMonthlyPayment(monthly.toFixed(2));
    setTotalPayment(totalPay.toFixed(2));
    setTotalInterest(totalInt.toFixed(2));

    updateChart(principal, totalInt);
  };

  // Update Chart.js
  const updateChart = (principal, interest) => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Principal', 'Interest'],
        datasets: [{
          data: [principal, interest],
          backgroundColor: ['#6c9cce', '#1765ab'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              pointStyle: 'rect' // ✅ changed to square
            }
          }
        }
      }
    });
  };

  // Recalculate whenever inputs change
  useEffect(() => {
    calculateLoan();
  }, [amount, rate, term]);

  return (
    <>
      <div className="calculator_page">
        <div className="section-bg-body"></div>

        <section className="gradient-bg">
          <div className="top-text">
            <div className="top-tag">
              <h1 className="tag-name">Personal Loan Calculator</h1>
            </div>
            <p className="white-text">Need a Loan? Let’s Make It Simple!</p>
            <p className="subtitle">
              Use our Personal Loan Calculator to see how much you’ll pay each month. <br />
              Just fill in a few details and get instant results — no math needed!
            </p>
          </div>

          <div className="calculator">
            <div className="main_container_grid">
              
              {/* Input Section */}
              <div className="selection_section">
                <div className="label_grid d-flex">
                  <label>Loan Amount (₹):</label>
                  <input
                    type="number"
                    className="form-control"
                    min="1000"
                    max="100000"
                    step="500"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                </div>

                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="500"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />

                <label>
                  Interest Rate (%): <span className="value-display">{rate}%</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                />

                <label>
                  Loan Term (Years): <span className="value-display">{term} years</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                />
              </div>

              {/* Output Section */}
              <div className="output_div">
                <canvas ref={chartRef} width="400" height="400"></canvas>

                <div className="results">
                  <div className="output_grid">
                    <h6>Monthly Payment:</h6>
                    <h6>₹ <span>{monthlyPayment}</span></h6>
                  </div>
                  <div className="output_grid">
                    <h6>Total Interest:</h6>
                    <h6>₹ <span>{totalInterest}</span></h6>
                  </div>
                  <div className="output_grid">
                    <h6>Total Payment:</h6>
                    <h6>₹ <span>{totalPayment}</span></h6>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}