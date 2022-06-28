import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default class HiddenPurchasingPatterns extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'bar',
          toolbar: false,
        },
        tooltip: {
          style: {
            fontSize: '16px',
            fontFamily: undefined,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded',
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent'],
        },
        yaxis: {
          max: 1,
        },
        xaxis: {
          categories: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
        },
        fill: {
          opacity: 1,
        },
      },
      series: [
        {
          name: 'Product A',
          data: [0.6, 0.65, 0.7, 0.72, 0.88, 1, 0.1],
        },
        {
          name: 'Product B',
          data: [0.6, 0.7, 0.74, 0.79, 0.82, 0.94, 0.25],
        },
        {
          name: 'Product C',
          data: [0.46, 0.54, 0.67, 0.45, 0.78, 0.87, 0.98],
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
          type='bar'
          width={600}
          height={400}
        />
      </div>
    );
  }
}
