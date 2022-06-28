import React, { Component } from 'react';

import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default class EffectiveChannels extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'bar',
          height: 1000,
          width: '100%',
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
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
          title: {
            text: '% (percent)',
          },
        },
        xaxis: {
          categories: ['LinkedIn', 'Facebook', 'Twitter', 'Instagram', 'Youtube', 'Pinterest'],
        },
        fill: {
          opacity: 1,
        },
      },
      series: [
        {
          name: 'Product X',
          data: [74, 51, 35, 29, 24, 3],
        },
        {
          name: 'Product Y',
          data: [52, 67, 70, 13, 22, 5],
        },
        {
          name: 'Product Z',
          data: [65, 71, 57, 45, 5, 6],
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
