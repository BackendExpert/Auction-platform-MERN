import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MernUsageChart = () => {
  const data = {
    labels: ["6 days ago", "5 days ago", "4 days ago", "3 days ago", "2 days ago", "Yesterday", "Today"],
    datasets: [
      {
        label: "New Users",
        data: [75, 80, 78, 85, 82, 88, 90],
        backgroundColor: "#ff5722",
      },
      {
        label: "New Auctions",
        data: [80, 85, 83, 90, 87, 92, 95],
        backgroundColor: "#ff6838",
      },
      {
        label: "New Winners",
        data: [85, 88, 90, 92, 95, 97, 99],
        backgroundColor: "#ff794e",
      }
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
        text: "Platform Analytics last 7 days",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default MernUsageChart;
