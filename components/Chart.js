import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { Bar } from 'react-chartjs-2'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

const Chart = ({ labels, data: rawData, income = 0, expense = 0 }) => {
  const option = {
    chartAreaBorder: {
      borderColor: 'rgba(0, 0, 0, 0)'
    },
    scales: {
      x: {
        grid: {
          display: false,
        }
      },
      y: {
        grid: {
          display: false,
        }
      }
    },
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: rawData,
        backgroundColor: '#6379F4',
        borderRadius: 1000,
        barThickness: 14
      }
    ],
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6'>
          <div>
            <FaArrowDown color='#1EC15F' />
          </div>
        </div>
        <div>Income</div>
        <div>Rp. {Number(income).toLocaleString('id-ID')}</div>
      </div>
      <div className='col-sm-6'>
        <div>
          <FaArrowUp color='#FF5B37' />
        </div>
        <div>Expense</div>
        <div>Rp. {Number(expense).toLocaleString('id-ID')}</div>
      </div>
      <div className='col-12'>
        <Bar option={option} data={data} />
      </div>
    </div>
  )
}

export default Chart