import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default class CustomerFlow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ['#060160', '#92a8d1', '#cc0033', '#f26052', '#007239', '#a0db8e'],
        chart: {
          height: 350,
          type: 'line',
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        tooltip: {
          style: {
            fontSize: '16px',
            fontFamily: undefined,
          },
          y: [
            {
              title: {
                formatter: function (val) {
                  return val;
                },
              },
            },
          ],
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [1, 1, 1, 1, 1, 1],
          curve: 'straight',
          dashArray: [0],
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '';
          },
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          categories: [
            'Start',
            'Request Offer',
            'Receive Offer',
            'Submit Request',
            'Request Processed',
          ],
        },
        grid: {
          borderColor: '#f1f1f1',
        },
      },
      series: [
        {
          name: 'Product A(Mobile)',
          data: [4500, 589, 213, 26, 19],
        },
        {
          name: 'Product A(Web Search)',
          data: [5200, 768, 578, 39, 36],
        },
        {
          name: 'Product B(Mobile)',
          data: [8900, 980, 768, 67, 54],
        },
        {
          name: 'Product B(Web Search)',
          data: [12400, 2589, 1789, 126, 113],
        },

        {
          name: 'Product C(Mobile)',
          data: [1200, 345, 267, 14, 11],
        },

        {
          name: 'Product C(Web Search)',
          data: [1650, 567, 450, 23, 20],
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
          type='line'
          width={600}
          height={400}
        />
      </>
    );
  }
}
