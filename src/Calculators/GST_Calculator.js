import React, { useState, useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js';

// Register necessary components
Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

export default function GST_Calculator() {
  // State to store the values of amount, GST rate, CGST, SGST, total GST, and total amount
  const [amount, setAmount] = useState(1000); // Default value for amount
  const [gstRate, setGstRate] = useState(18); // Default GST rate
  const [cgst, setCgst] = useState(0);
  const [sgst, setSgst] = useState(0);
  const [totalGST, setTotalGST] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const chartRef = useRef(null); // Ref for the chart instance
  const chartInstance = useRef(null); // Ref for the chart instance

  // Function to update the chart
  const updateChart = (cgst, sgst, principal) => {
    const data = {
      labels: ['CGST', 'SGST', 'Principal'],
      datasets: [{
        data: [cgst, sgst, principal],
        backgroundColor: ['#1765ab', '#0871cf', '#6c9cce'],
      }]
    };

    // Destroy the existing chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create the new chart
    const ctx = chartRef.current?.getContext('2d');
    if (ctx) {
      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: data,
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
    }
  };

  // Function to calculate GST
  const calculateGST = (principal) => {
    const gstAmount = (principal * gstRate) / 100;
    const cgstAmount = gstAmount / 2;
    const sgstAmount = gstAmount / 2;
    const totalAmountCalculated = principal + gstAmount;

    setCgst(cgstAmount);
    setSgst(sgstAmount);
    setTotalGST(gstAmount);
    setTotalAmount(totalAmountCalculated);

    updateChart(cgstAmount, sgstAmount, principal);
  };

  // Sync and calculate function for input changes
  const syncAndCalculate = (value) => {
    const val = parseFloat(value);
    if (isNaN(val)) return;

    setAmount(val);
    calculateGST(val);
  };

  // useEffect to initialize the chart
  useEffect(() => {
    // Initial calculation
    calculateGST(amount);
  }, [amount, gstRate]); // Recalculate whenever amount or gstRate changes
  
  return (
    <>
      <div className="calculator_page">
        <div className="section-bg-body"></div>

        <section className="gradient-bg">
          <div className="top-text">
            <div className="top-tag">
              <h1 className="tag-name">GST Calculator</h1>
            </div>
            <p className="white-text">GST Made Easy!</p>
            <p className="subtitle">Accurately compute GST-inclusive or GST-exclusive prices based on Indian tax slabs. <br />Ideal for business owners, freelancers, and tax professionals.</p>
          </div>
          <div className="calculator ">
            <div className="main_container_grid">
              <div className="selection_section">
                <div className="label_grid d-flex">
                  <label>Principal Amount (₹):</label>
                  <input
                    type="number"
                    className="form-control"
                    min="0"
                    value={amount}
                    onChange={(e) => syncAndCalculate(e.target.value)}
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="100"
                  value={amount}
                  onChange={(e) => syncAndCalculate(e.target.value)}
                />

                <label>GST Rate (%)</label>
                <select
                  value={gstRate}
                  onChange={(e) => setGstRate(Number(e.target.value))}
                >
                  <option value="5">5%</option>
                  <option value="12">12%</option>
                  <option value="18">18%</option>
                  <option value="28">28%</option>
                </select>
              </div>
              <div className="output_div">
                <canvas ref={chartRef}></canvas>

                <div className="results">
                  <div className="output_grid">
                    <h6>CGST:</h6>
                    <h6>₹{cgst.toFixed(2)}</h6>
                  </div>
                  <div className="output_grid">
                    <h6>SGST:</h6>
                    <h6>₹{sgst.toFixed(2)}</h6>
                  </div>
                  <div className="output_grid">
                    <h6>Total GST:</h6>
                    <h6>₹{totalGST.toFixed(2)}</h6>
                  </div>
                  <div className="output_grid">
                    <h6>Total Amount:</h6>
                    <h6>₹{totalAmount.toFixed(2)}</h6>
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