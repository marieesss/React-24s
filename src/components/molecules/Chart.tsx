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
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { Chart as ChartProps} from '../../types/chart';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  // get css colors
  var root = document.documentElement
  var style = getComputedStyle(root);
  

const Chart : React.FC<ChartProps> = ({labels, data}) => {
    const chartData = {
        labels,
        datasets: [
          {
            label: 'Bitcoin Price Index',
            data,
            borderColor: style.getPropertyValue('--accent'),
            backgroundColor: style.getPropertyValue('--background'),
          },
        ],
      };
    
    
  return (
    <div>
       {data.length > 0 && <Line data={chartData} options={options} />}
    </div>
  )
}

export default Chart
