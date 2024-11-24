import React from 'react';
import './CircularChart.css';

const CircularChart = ({ label, completed, total, color }) => {
  const percentage = ((completed / total) * 100).toFixed(1);
  const strokeDasharray = `${percentage}, 100`;

  return (
    <div className="circular-chart">
      <svg viewBox="0 0 36 36" className="circular-chart-svg">
        <path
          className="circle-bg"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          stroke={color}
          strokeDasharray={strokeDasharray}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" className="percentage">{percentage}%</text>
      </svg>
      <div className="label">
        <span>{label}</span>
        <span>{completed}/{total}</span>
      </div>
    </div>
  );
};

export default CircularChart;