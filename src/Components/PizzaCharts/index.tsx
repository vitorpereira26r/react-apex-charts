import ReactApexChart from "react-apexcharts";

export const PizzaCharts = () => {

  const options = {
    chart: {
      type: 'pie',
    },
    labels: ['Shopee', 'Mercado Livre', 'Elo7', 'Magalu', 'Amazon'],
    colors: ["#FADE00", "#FF9900", "#FEB131", "#FE5722", "#0E89FF"],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val: number):string => { return val+"%" } 
      },
    },
    stroke: {
      width: 0 
    }
  };

  const series = [44, 13, 22, 43, 55];

  return (
    <div style={{ pointerEvents: "none" }}>
      <ReactApexChart options={options as ApexCharts.ApexOptions} series={series} type="pie" width={380} />
    </div>
  )
}
