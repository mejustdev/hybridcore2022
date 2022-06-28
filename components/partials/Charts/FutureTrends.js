import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default class FutureTrends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ['#060160', '#92a8d1', '#cc0033', '#a0db8e'],
        chart: {
          height: 350,
          width: '100%',
          type: 'bar',
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          stacked: true,
        },
        tooltip: {
          style: {
            fontSize: '16px',
            fontFamily: undefined,
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
        },
        yaxis: {
          max: 100,
        },
        xaxis: {
          categories: [
            'Energy',
            'Defence',
            'Banking',
            'Insurance',
            '',
            'Energy',
            'Defence',
            'Banking',
            'Insurance',
            '',
            'Energy',
            'Defence',
            'Banking',
            'Insurance',
          ],
        },
        grid: {
          borderColor: '#f1f1f1',
        },
      },
      series: [
        {
          name: 'Banner',
          // eslint-disable-next-line
          data: [18, 22, 20, 24, , 16, 15, 16, 24, , 14, 15, 16, 22],
        },
        {
          name: 'Social Media',
          // eslint-disable-next-line
          data: [42, 32, 36, 34, , 44, 35, 40, 34, , 45, 37, 44, 36],
        },
        {
          name: 'Search',
          // eslint-disable-next-line
          data: [26, 35, 28, 16, , 28, 40, 25, 16, , 30, 40, 26, 19],
        },
        {
          name: 'Video',
          // eslint-disable-next-line
          data: [14, 11, 16, 26, , 12, 10, 21, 26, , 11, 8, 22, 23],
        },
      ],
    };
  }
  render() {
    return (
      <>
        <Chart
          series={this.state.series}
          options={this.state.options}
          type='bar'
          width={600}
          height={400}
        />
      </>
    );
  }
}
