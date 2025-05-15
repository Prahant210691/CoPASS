import React, { useState, useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js';

// Register necessary components, including DoughnutController
Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

export default function FD_Calculator() {
  const [principal, setPrincipal] = useState(10000); // default value for principal
  const [rate, setRate] = useState(7); // default interest rate
  const [years, setYears] = useState(5); // default years
  const [frequency, setFrequency] = useState(1); // default frequency (annually)

  const [maturityAmount, setMaturityAmount] = useState(0);
  const [interestEarned, setInterestEarned] = useState(0);

  const pieChartRef = useRef(null); // Ref for pie chart
  const chartRef = useRef(null); // Ref to store the chart instance

  useEffect(() => {
    calculateFD();
  }, [principal, rate, years, frequency]);

  const calculateFD = () => {
    const r = rate / 100;
    const n = frequency;
    const A = principal * Math.pow(1 + r / n, n * years);
    const interest = A - principal;

    setMaturityAmount(A);
    setInterestEarned(interest);

    updatePieChart(principal, interest);
  };

  const updatePieChart = (principal, interestEarned) => {
    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy the existing chart if it exists
    }

    const ctx = pieChartRef.current.getContext('2d');

    const newChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Principal', 'Interest Earned'],
        datasets: [
          {
            data: [principal, interestEarned],
            backgroundColor: ['#6c9cce', '#1765ab'],
            hoverOffset: 10,
          },
        ],
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
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.label}: ₹${context.parsed.toFixed(2)}`;
              },
            },
          },
        },
      },
    });

    chartRef.current = newChart; // Store the new chart instance in the ref
  };

  return (
    <>
      <div className="calculator_page">
        <div className="section-bg-body"></div>

        <section className="gradient-bg">
          <div className="top-text">
            <div className="top-tag">
              <h1 className="tag-name">FD Calculator</h1>
            </div>
            <p className="white-text">Higher Returns, Complete Security.</p>
            <p className="subtitle">Use our FD Calculator to plan your investments wisely and maximise your returns.</p>
          </div>
          <div className="calculator">
            <div className="main_container_grid">
              <div className="selection_section">
                <div className="label_grid d-flex">
                  <label>Principal Amount (₹):</label>
                  <input type="number" className="form-control" id="principalInput" min="10000" max="1000000" step="1000" value={principal} onChange={(e) => setPrincipal(parseInt(e.target.value))} />
                </div>

                <input type="range" id="principal" min="10000" max="1000000" step="1000" value={principal} onChange={(e) => setPrincipal(parseInt(e.target.value))} />
                <label>Interest Rate (%): <output id="rateVal">{rate}</output></label>
                <input type="range" id="rate" min="1" max="15" step="0.1" value={rate} onChange={(e) => setRate(parseFloat(e.target.value))} />


                <label>Time Period (Years): <output id="yearsVal">{years}</output></label>
                <input type="range" id="years" min="1" max="10" value={years} onChange={(e) => setYears(parseInt(e.target.value))} />

                <label>Compound Frequency</label>
                <select
                  id="frequency"
                  value={frequency}
                  onChange={(e) => setFrequency(parseInt(e.target.value))}
                >
                  <option value="1">Yearly</option>
                  <option value="2">Half-Yearly</option>
                  <option value="4">Quarterly</option>
                  <option value="12">Monthly</option>
                </select>
              </div>
              <div className="output_div">
                <canvas id="pieChart11" ref={pieChartRef}></canvas>

                <div className="results" id="results">
                  <div className="output_grid">
                    <h6>Maturity Amount:</h6>
                    <h6>₹{maturityAmount.toFixed(2)}</h6>
                  </div>
                  <div className="output_grid">
                    <h6>Interest Earned:</h6>
                    <h6>₹{interestEarned.toFixed(2)}</h6>
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
