import ReactApexChart from "react-apexcharts";

export const ColumnChart = () => {

  const data = [133, 133, 133, 133, 133, 133, 133]
  const maxSalesValue = Math.max(...data);
  const maxYaxisValue = Math.ceil((maxSalesValue + 1) / 100) * 100;

  const options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      }
    },
    plotOptions: {
      bar: {
        horizontal: false, 
        columnWidth: '55%',
        borderRadius: "4",
        endingShape: 'rounded' 
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['5/9', '6/9', '7/9', '8/9', '9/9', '10/9', '11/9'],
    },
    yaxis: {
      title: {
        show: false
      },
      min: 0, 
      tickAmount: maxYaxisValue/100, 
      labels: {
        formatter: (value: number) => {
          return `${Math.ceil(value / 100) * 100}`;
        }
      },
      forceNiceScale: false, 
      max: (max: number) => { 
        return Math.ceil(max / 100) * 100; 
      },
      axisTicks: {
        show: false,
        borderType: 'solid',
        color: '#78909C',
        width: 0,
        offsetX: 0,
        offsetY: 0
      },
      axisBorder: {
        show: false,
      },
    },
    grid: {
      show: true,
      borderColor: '#90A4AE',
      strokeDashArray: 10, 
      position: 'back',
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      row: {
        colors: undefined,
        opacity: 0.5
      },
      column: {
        colors: undefined,
        opacity: 0.5
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 3
      },
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val: number):string {
          return "$" + val + "k"
        }
      }
    },
    colors: ['#038C3E'], // customize your bars' color here
  };

  const series = [{
    name: 'Sales',
    data: data
  }];

  return (
    <div >
      <ReactApexChart options={options as unknown as ApexCharts.ApexOptions} series={series} type="bar" width={500} />
    </div>
  )
}
