import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './radilBar.css';

const data = 
// {
//   series: [67],
//   options: {
//     chart: {
//       type: 'radialBar',
//     },
//     plotOptions: {
//       radialBar: {
//         hollow: {
//           size: '70%',
//         },
//       },
//     },
//     labels: ['Apples'],
//   },
// };
{
          
  series: [67],
  options: {
    chart: {
      height: 500,
      type: 'radialBar',
      offsetY: -10
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '16px',
            color: undefined,
            offsetY: 120
          },
          value: {
            offsetY: 76,
            fontSize: '22px',
            color: undefined,
            formatter: function (val) {
              return val + "%";
            }
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
      },
    },
    stroke: {
      dashArray: 4
    },
    labels: ['Median Ratio'],
  },


};



const RadialBarChart = () => {
  return (
    <ReactApexChart
      options={data.options}
      series={data.series}
      type="radialBar"
      height={200}
    />
  );
};

export default RadialBarChart;

