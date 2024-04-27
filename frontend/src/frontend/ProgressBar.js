// CircularProgressBar.js

import React from 'react';

const ProgressBar = ({ percentage,color }) => {
  const strokeWidth = 10; // Adjust as needed
  const radius = 35; // Adjust as needed
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * percentage) / 100;

  return (
    <div className="relative w-54 h-50">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          className="text-gray-200 stroke-current"
          strokeWidth={strokeWidth}
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
        />

        {/* Progress circle */}
        <circle
          className={`text-${color} stroke-current`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
        />

        {/* Center text */}
        <text
          x="50"
          y="50"
          fontFamily="Verdana"
          fontSize="12"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default ProgressBar;
