import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const RevenueChart = () => {
  const data = {
    labels: ['Week 0', 'Week 2', 'Week 4', 'Week 6', 'Week 8', 'Week 10'],
    datasets: [
      {
        label: 'Revenue (USD)',
        data: [0, 200, null, null, null, null], // Only first 2 weeks of data
        borderColor: '#60a5fa',
        borderWidth: 2,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(96, 165, 250, 0.2)');
          gradient.addColorStop(1, 'rgba(96, 165, 250, 0)');
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#60a5fa',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: (context) => {
          // Only show points for actual data
          return context.raw === null ? 0 : 6;
        },
        pointHoverRadius: (context) => {
          return context.raw === null ? 0 : 8;
        },
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#60a5fa',
        pointHoverBorderWidth: 2,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return context.raw === null ? 'No data yet' : `$ ${context.raw}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(96, 165, 250, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: '#94a3b8',
          padding: 10,
          callback: function(value) {
            return '$ ' + value;
          }
        },
        border: {
          dash: [5, 5],
        },
        max: 300, // Set a fixed max to show room for growth
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#94a3b8',
          padding: 10,
        },
        border: {
          dash: [5, 5],
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    elements: {
      line: {
        cubicInterpolationMode: 'monotone',
      },
    },
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Revenue Growth</h2>
        <div className="flex items-center gap-2 bg-blue-500/10 rounded-full px-4 py-2">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
          <span className="text-sm text-blue-400">Live Tracking</span>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -left-4 -right-4 -top-4 -bottom-4 bg-gradient-to-b from-blue-500/5 to-transparent rounded-xl"></div>
        <Line data={data} options={options} />
      </div>
      <div className="mt-6 flex justify-center">
        <div className="bg-blue-500/10 rounded-full px-4 py-2">
          <span className="text-sm text-blue-400">Turi Labs Graph</span>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
