import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default class VisitsTogether extends Component {
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
          enabled: true,
          style: {
            fontSize: '16px',
          },
          x: {
            show: false,
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
          show: false,
        },
        xaxis: {
          categories: [
            'Product A',
            'Product B',
            'Product C',
            'Product D',
            'Website A',
            'Website B',
            'Website C',
            'Website D',
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
          data: [15, 17, 40, 26],
          name: '% of Responses',
        },
        {
          data: [5, 7, 22, 36],
          name: '% of Responses',
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
