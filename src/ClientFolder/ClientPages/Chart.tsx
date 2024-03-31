import { Chart as ChartJS, defaults } from "chart.js/auto";

import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import SideBar from "../Components/SideBar";
import axios from "axios";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";

interface Item {
  image: string;
  title: string;
  description: string;
  author: string;
  expired?: boolean;
  count?: number;
}

const Chart = () => {
  const [data, setData] = useState<Item[]>([]);

  const fetchData = async () => {
    try {
      await axios
        .get("https://librarybackend-vklf.onrender.com/booksRoutes")
        .then((res: any) => {
          setData(res.data);
        })
        .catch((err: any) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setInterval(() => {
      fetchData();
    }, 1000);
  }, []);

  return (
    <div className="w-full  flex gap-5">
      <div className="w-1/4	 bg-[#343a40]  h-screen">
        <SideBar />
      </div>

      <div className="w-3/4 px-4 py-5 mt-10">
        <Bar
          data={{
            labels: data.map((item) => item.title),
            datasets: [
              {
                label: "Book Count",
                data: data.map((item) => item.count),
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 205, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(201, 203, 207, 0.2)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                  "rgb(153, 102, 255)",
                  "rgb(201, 203, 207)",
                ],
                borderWidth: 1,
                borderRadius: 5,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Chart;
