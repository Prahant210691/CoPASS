import React, { useState, useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js';

// Register necessary Chart.js components
Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

export default function HomeLoan_Calculator() {

  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(20);

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const calculateEMI = () => {
    const P = loanAmount;
    const R = interestRate / 12 / 100;
    const N = loanTerm * 12;

    const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalPay = EMI * N;
    const totalInt = totalPay - P;

    setEmi(Math.round(EMI));
    setTotalInterest(Math.round(totalInt));
    setTotalPayment(Math.round(totalPay));

    updateChart(P, Math.round(totalInt));
  };

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

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <>
      <div className="calculator_page">
        <div className="section-bg-body"></div>

        <section className="gradient-bg">
          <div className="top-text">
            <div className="top-tag">
              <h1 className="tag-name">Home Loan Calculator</h1>
            </div>
            <p className="white-text">Plan Your Dream Home with Ease!</p>
            <p className="subtitle">Use our Home Loan Calculator to find out how much you'll pay every month toward your loan.<br />Enter your details and get instant results — it's that easy!</p>
          </div>

          <div className="calculator">
            <div className="main_container_grid">

              {/* INPUT Section */}
              <div className="selection_section">
                <div className="label_grid d-flex">
                  <label>Loan Amount (₹):</label>
                  <input
                    type="number"
                    className="form-control"
                    min="10000"
                    max="1000000"
                    step="1000"
                    value={loanAmount}
                    onChange={(e) => {
                      const value = Math.min(Math.max(+e.target.value, 10000), 1000000);
                      setLoanAmount(value);
                    }}
                  />
                </div>

                <input
                  type="range"
                  min="10000"
                  max="1000000"
                  step="1000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                />

                <label>
                  Interest Rate (%): <output className="value-display">{interestRate.toFixed(1)}</output>
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />

                <label>
                  Loan Term (years): <output className="value-display">{loanTerm}</output>
                </label>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                />

              </div>

              {/* OUTPUT Section */}
              <div className="output_div">
                <canvas ref={chartRef} height="200"></canvas>

                <div className="results" id="resultSection">
                  <div className="output_grid">
                    <h6>Monthly EMI:</h6>
                    <h6>₹ {emi.toLocaleString()}</h6>
                  </div>
                  <div className="output_grid">
                    <h6>Total Interest:</h6>
                    <h6>₹ {totalInterest.toLocaleString()}</h6>
                  </div>
                  <div className="output_grid">
                    <h6>Total Payment:</h6>
                    <h6>₹ {totalPayment.toLocaleString()}</h6>
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