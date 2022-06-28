import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default class Abandonments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      1: {
        options: {
          chart: {
            type: 'bar',
            width: '100%',
            height: 120,
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
          colors: ['#28AE60'],
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: [
              'Extra Cost Too High (Tax, Fees, Shipping)',
              "I couldn't Calculate Total Cost Up-Front",
            ],
            max: 100,
          },
        },
        series: [
          {
            data: ['60', '23'],
            name: 'Cost',
          },
        ],
      },
      2: {
        options: {
          chart: {
            type: 'bar',
            height: 220,
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
          colors: ['#28AE60'],
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: [
              'The Site Wanted Me to Generate an Account',
              'Too Long/Complicated Checkout Process',
              'Website Had Errors',
              "I didn't Trust the Site",
              'There Were Not Enough Payment Mothods',
              'The Credit Card Was Declined',
            ],
            max: 100,
          },
        },
        series: [
          {
            data: ['37', '28', '12', '27', '8', '4'],
            name: 'Website',
          },
        ],
      },
      3: {
        options: {
          chart: {
            type: 'bar',
            height: 120,
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
          colors: ['#28AE60'],
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: ['Delivery Was Too Slow', 'Return Policy Was Not Satisfactory'],
            max: 100,
          },
        },
        series: [
          {
            data: ['18', '11'],
            name: 'Customer Service',
          },
        ],
      },
    };
  }
  render() {
    return (
      <>
        <Chart
          options={this.state[1].options}
          series={this.state[1].series}
          type='bar'
          width={500}
          height={200}
        />
        <Chart
          options={this.state[2].options}
          series={this.state[2].series}
          type='bar'
          width={500}
          height={200}
        />
        <Chart
          options={this.state[3].options}
          series={this.state[3].series}
          type='bar'
          width={500}
          height={200}
        />
      </>
    );
  }
}
