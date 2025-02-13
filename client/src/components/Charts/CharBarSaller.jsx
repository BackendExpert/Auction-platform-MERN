import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CharBarSaller = () => {
  const data = {
    labels: ["6 days ago", "5 days ago", "4 days ago", "3 days ago", "2 days ago", "Yesterday", "Today"],
    datasets: [
      {
        label: "Last Week Income",
        data: [25, 480, 120, 200, 1500, 20, 0],
        backgroundColor: "#ff5722",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Last Week Income",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default CharBarSaller;
