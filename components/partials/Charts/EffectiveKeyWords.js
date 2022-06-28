import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default class EffectiveKeyWords extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'line',
          zoom: {
            enabled: false,
          },
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          style: {
            fontSize: '16px',
            fontFamily: undefined,
            backgroundColor: '#545454',
          },
        },
        colors: ['#77B6EA', '#545454', '#0000FF'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth',
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: [
            ['User', 'Friendly'],
            ['Integrated', 'Apps'],
            'Hybrid',
            'Lower Cost',
            '5G',
            'Hybrid',
            'Personalized',
            'Privacy',
            'Hybrid',
          ],
          labels: {
            rotate: 30,
          },
        },
        yaxis: {
          title: {
            text: 'Time',
          },
          min: 0.4,
          max: 1,
        },
        responsive: [
          {
            breakpoint: 1000,
            options: {
              plotOptions: {
                bar: {
                  horizontal: false,
                },
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },
      series: [
        {
          name: '0-5 Seconds',
          data: [0.6, 0.7, 0.9, 0.8, 0.9, 1, 0.8, 0.9, 0.6],
        },
        {
          name: '05-10 Seconds',
          data: [0.8, 0.9, 1, 0.6, 0.8, 0.6, 0.7, 0.9, 0.8],
        },
        {
          name: '10-15 Seconds',
          data: [0.7, 0.8, 0.8, 0.6, 0.6, 0.5, 0.6, 0.8, 0.7],
        },
      ],
    };
  }
  render() {
    return (
      <div className='chart object-contain'>
        <ReactApexChart
          series={this.state.series}
          options={this.state.options}
          type='line'
          width={600}
          height={400}
        />
      </div>
    );
  }
}
