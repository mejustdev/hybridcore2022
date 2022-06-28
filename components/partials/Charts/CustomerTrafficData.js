import React, { useEffect } from 'react';
import Chart from 'chart.js';

export default function CustomerTrafficData() {
  useEffect(() => {
    const ctx = document.getElementById('customer-traffic-data').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Twitter', 'Facebook', 'Linkedin', 'Google', 'Bing', '****/ referral'],
        datasets: [
          {
            label: 'Sessions',
            backgroundColor: 'rgba(255, 0, 0, 0.8)',
            borderColor: 'rgba(255, 0, 0, 0.8)',
            data: [19.16, 14.72, 12.67, 17.12, 29.44, 8.7, 12.87],
            fill: false,
          },
          {
            label: '% New Sessions',
            fill: false,
            backgroundColor: 'rgba(0, 0, 255, 0.8)',
            borderColor: 'rgba(0, 0, 255, 0.5)',
            data: [68.41, 88.84, 59.54, 73.87, 84.85, 76.9, 23.08],
          },
          {
            label: 'New Users',
            fill: false,
            backgroundColor: 'rgba(255, 255, 0, 0.8)',
            borderColor: 'rgba(255, 255, 0, 0.8)',
            data: [23.82, 23.5, 10.05, 5.4, 24.8, 3.97, 7.79],
          },
          {
            label: 'Bounce Rate',
            fill: false,
            backgroundColor: 'rgba(128, 0, 128, 0.8)',
            borderColor: 'rgba(128, 0, 128, 0.8)',
            data: [49.32, 63.87, 92.21, 50.79, 78.6, 76.36, 19.96],
          },
          {
            label: 'Page / Session',
            fill: false,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderColor: 'rgba(0, 0, 0, 0.8)',
            data: [23.2, 17.7, 12.1, 20.0, 14.2, 8.17, 6.99],
          },
          {
            label: 'Avg. Session Duration (sec)',
            fill: false,
            backgroundColor: 'rgba(0, 255, 255, 0.8)',
            borderColor: 'rgba(0, 255, 255, 0.8)',
            data: [120, 124, 53, 191, 112, 240, 227],
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Customer Traffic Data',
        },
        maintainAspectRatio: false,
        scales: {
          y: {
            gridLines: {
              drawBorder: false,
              color: ['pink', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'],
            },
            min: 0,
            max: 100,
            ticks: {
              stepSize: 10,
            },
          },
        },
        tooltips: {
          titleFontSize: 18,
          bodyFontSize: 16,
        },
      },
    });
  });
  return (
    <div className='chart-container '>
      <canvas id='customer-traffic-data' />
    </div>
  );
}
