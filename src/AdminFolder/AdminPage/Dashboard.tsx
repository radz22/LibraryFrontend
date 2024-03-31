import { Chart as ChartJS, defaults } from "chart.js/auto";

import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";

interface Item {
  _id: string;
  email: string;
  borrow: boolean;
  image: string;
  title: string;
  description: string;
  author: string;
  expired?: boolean;
  count?: number;
  updatedAt: string;
}

interface Comment {
  userid: string;
  _id: string;
  comment: string;
  email: string;
}

const DashBoard = () => {
  const [data, setData] = useState<Item[]>([]);
  const [comment, setComment] = useState<Comment[]>([]);
  const [message, setMessage] = useState<any[]>([]);

  const fetchMessage = async () => {
    try {
      await axios
        .get("https://librarybackend-vklf.onrender.com/contactRoutes/")
        .then((res: any) => {
          setMessage(res.data.msg);
        })
        .catch((err: any) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const fetchData = async () => {
    try {
      await axios
        .get("https://librarybackend-vklf.onrender.com/booksRoutes/")
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
  const uniqueObjects = Array.from(
    new Set(message.map((item) => JSON.stringify(item))),
    (item) => JSON.parse(item)
  );

  useEffect(() => {
    setInterval(() => {
      fetchData(), fetchMessage();
    }, 1000);
  }, []);

  const handleReturn = async (id: string) => {
    try {
      toast.success("sucess return");
      setTimeout(async () => {
        await axios
          .put(`http://localhost:3000/booksRoutes/resetExpiration/${id}`)
          .then((res) => {
            console.log(res.data.msg);
          })
          .catch(() => {
            console.log("error");
          });
      }, 4000);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/commentRoutes/65d75d361141084402c8d175/comment`,
        {}
      )
      .then((res) => {
        setComment(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  });

  const getValueFromUnique = (uniqueObject: any) => {
    console.log(uniqueObject);
  };
  return (
    <div>
      <div className="h-72 mb-20">
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
      <div className="px-4 py-5 w-full  bg-[#5886ff] mt-10 ">
        <div>
          <ToastContainer autoClose={2000} draggable={false} />
        </div>
        <div className="grid  grid-cols-3	place-items-center gap-10">
          <div>
            <h1 className="text-xl text-white	">Book</h1>
          </div>

          <div>
            <h1 className="text-xl	text-white		">Name</h1>
          </div>

          <div>
            <h1 className="text-xl text-white		">Expiration</h1>
          </div>
        </div>
        <div className="mt-5 max-h-96		overflow-auto">
          {data
            .filter((item) => item.borrow == true)
            .map((item) => (
              <div className="grid  grid-cols-3	place-items-center gap-10 ">
                <div>
                  <p className="text-lg	text-white	font-bold">{item.title}</p>
                </div>
                <div className="mt-5">
                  <p className="text-lg	text-white	font-bold">{item.email}</p>
                </div>

                <div className="mt-7">
                  {item.expired ? (
                    <div>
                      <button
                        className="text-lg text-white		font-bold bg-[#d41f1f] py-3 px-3 rounded-xl	"
                        onClick={() => handleReturn(item._id)}
                      >
                        Return
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p className="text-lg	text-white	font-bold bg-lime-600	 py-3 px-3 rounded-xl ">
                        Borrow
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
      {uniqueObjects.map((obj, index) => (
        <li key={index}>
          <div>
            <p>Email: {obj.email}</p>
            <p>User ID: {obj.userid}</p>
            <p>Message: {obj.message}</p>
            <button onClick={() => getValueFromUnique(obj.userid)}>
              Get Value
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default DashBoard;
