import { Bar } from 'react-chartjs-2';

import species from '@/constants/Species';

const Chart = ({ data }) => {
  const { residents } = data;

  const humans = residents.filter((item) => item.species === species.human);
  const alien = residents.filter((item) => item.species === species.alien);
  const robots = residents.filter((item) => item.species === species.robot);

  const config = {
    labels: ['Robots', 'Aliens', 'Humans'],
    datasets: [
      {
        label: '# of robots vs number of aliens vs number of humans',
        data: [robots.length, alien.length, humans.length],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Bar data={config} options={options} />;
};

export default Chart;
