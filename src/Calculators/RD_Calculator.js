import React, { useState, useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js';

// Register necessary components, including DoughnutController
Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

export default function RD_Calculator() {
  const [principal, setPrincipal] = useState(1000); // Default principal
  const [interestRate, setInterestRate] = useState(7); // Default interest rate
  const [duration, setDuration] = useState(12); // Default duration in months

  const [maturityAmount, setMaturityAmount] = useState(0);
  const [interestEarned, setInterestEarned] = useState(0);

  const chartRef = useRef(null); // Ref for the chart
  const chartInstance = useRef(null); // Ref for the chart instance

  // Function to calculate RD
  const calculateRD = () => {
    const P = parseFloat(principal);
    const R = parseFloat(interestRate);
    const N = parseFloat(duration);

    // Calculate interest and maturity
    const r = R / 100 / 12; // Monthly rate
    const maturity = P * N + (P * N * (N + 1)) / 2 * r;
    const interest = maturity - (P * N);

    setMaturityAmount(maturity);
    setInterestEarned(interest);

    // Update the chart data
    if (chartInstance.current) {
      chartInstance.current.data.datasets[0].data = [P * N, interest];
      chartInstance.current.update();
    }
  };

  // Effect to initialize the chart
  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) return;

    // Initialize the chart
    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Invested Amount', 'Interest Earned'],
        datasets: [
          {
            data: [0, 0],
            backgroundColor: ['#6c9cce', '#1765ab'],
            borderColor: ['#ffffff', '#ffffff'],
            borderWidth: 2,
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
        },
      },
    });

    // Initial calculation
    calculateRD();

    // Cleanup chart on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Only run once when the component is mounted

  // Event handlers for input changes
  const handlePrincipalChange = (e) => {
    setPrincipal(e.target.value);
  };

  const handleInterestRateChange = (e) => {
    setInterestRate(e.target.value);
    calculateRD();
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
    calculateRD();
  };

  return (
    <div className="calculator_page">
      <div className="section-bg-body"></div>
      <section className="gradient-bg">
        <div className="top-text">
          <div className="top-tag">
            <h1 className="tag-name">Recurring Deposit (RD) Calculator</h1>
          </div>
          <p className="white-text">Watch Your Savings Grow! 🌱</p>
          <p className="subtitle">
            This RD calculator helps you determine the maturity amount and interest earned on your recurring savings based on compound interest.
          </p>
        </div>
        <div className="calculator">
          <div className="main_container_grid">
            <div className="selection_section">
              <div className="label_grid d-flex">
                <label>Monthly Deposit (₹):</label>
                <input
                  type="number"
                  className="form-control"
                  min="100"
                  max="10000"
                  step="100"
                  value={principal}
                  onChange={handlePrincipalChange}
                />
              </div>

              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={principal}
                onChange={handlePrincipalChange}
              />

              <label>
                Annual Interest Rate (%): <output id="interestValue">{interestRate}</output>
              </label>
              <input
                type="range"
                min="1"
                max="15"
                step="0.1"
                value={interestRate}
                onChange={handleInterestRateChange}
              />

              <label>
                Duration (Months): <output id="durationValue">{duration}</output>
              </label>
              <input
                type="range"
                min="1"
                max="60"
                value={duration}
                onChange={handleDurationChange}
              />
            </div>
            <div className="output_div">
              <canvas ref={chartRef} id="rdChart"></canvas>

              <div className="results" id="results">
                <h4>Maturity Details</h4>
                <div className="output_grid">
                  <h6>Total Amount:</h6>
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
  );
}
