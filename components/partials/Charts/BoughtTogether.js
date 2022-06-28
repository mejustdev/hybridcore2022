import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default class BoughtTogether extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'bar',

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
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top',
            },
          },
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff'],
          },
        },
        stroke: {
          show: false,
          width: 1,
          colors: ['#fff'],
        },
        legend: {
          show: true,
        },
        xaxis: {
          categories: [
            'Smart Phone A',
            'Product B',
            'Tablet C',
            'Product D',
            'Headphone E',
            'Product F',
          ],
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
          name: 'Germany',
          data: [14, 12, 9, 8, 12, 11.4],
        },
        {
          name: 'Netherlands',

          data: [7, 6, 6, 5, 5, 4.8],
        },
        {
          name: 'France',

          data: [9, 7.8, 8, 7.3, 2, 1.2],
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
