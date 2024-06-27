import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    scales,
    Scale,
    TooltipItem,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { Chart as ChartProps} from '../../types/chart';
import styles from "../../styles/chart.module.css"
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

// get css colors
var root = document.documentElement
var style = getComputedStyle(root);
  

const Chart : React.FC<ChartProps> = ({labels, data, text}) => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: text,
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<'line'>) {
            let label = context.dataset.label || '';
  
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null && context.parsed.y !== undefined) {
              label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: style.getPropertyValue('--accent'),
          borderColor: 'green'
        }
      },
      y: {
        grid: {
          color: style.getPropertyValue("--accent"),
          borderColor: 'green'
        },
        ticks: {
          callback: function (this: Scale, tickValue: number | string) {
            if (typeof tickValue === 'number') {
              return '$' + tickValue.toFixed(2);
            }
            return tickValue;
          },
        }
      }
    }
  };  


    const chartData = {
        labels,
        datasets: [
          {
            label: 'Bitcoin Price Index',
            data,
            borderColor: style.getPropertyValue('--secondary'),
            backgroundColor: style.getPropertyValue('--background'),
          },
        ],
      };
    
    
  return (
    <div className={styles.chartContainer}>
       {data.length > 0 && <Line data={chartData} options={options}  />}
    </div>
  )
}

export default Chart
