import ReactApexChart from "react-apexcharts";

export const FinancialSummaryChart = () => {

  const options = {
    chart: {
      type: 'line',
      height: 350,
      zoom: {
        enabled: false
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
      }
    },
    stroke: {
        curve: 'smooth', 
    },
    xaxis: {
      categories: ['05/9', '06/9', '07/9', '08/9', '09/9', '10/9', '11/9']
    },
    annotations: {
      xaxis: [
        {
          x: new Date('07/9').getTime(),
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396'
            },
            text: 'Annotation Test'
          }
        }
      ]
    },
    title: {
      text: 'Resumo Financeiro',
      align: 'left'
    },
    yaxis: {
      labels: {
        formatter: function (val: number) {
          return val.toFixed(0);
        }
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y: number) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " views";
          }
          return y;
        }
      }
    }
  };

  const series = [
    {
      name: 'Series 1',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: 'Series 2',
      data: [11, 32, 45, 32, 34, 52, 41]
    },
  ];

  return (
    <div>
        <ReactApexChart options={options as ApexCharts.ApexOptions} series={series} type="line" width={800}/>
    </div>
  )
}
