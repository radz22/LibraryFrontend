import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

interface Props {
  email: string;
}
interface Item {
  image: string;
  title: string;
  description: string;
  author: string;
  expired?: boolean;
  count?: number;
}
const BackHome: React.FC<Props> = ({ email }) => {
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

  const handleBook = async (id: any) => {
    try {
      await axios
        .put(
          `https://librarybackend-vklf.onrender.com/booksRoutes/expired/${id}`,
          {
            email: email,
          }
        )
        .then(() => {
          toast.success("Sucess");
        })
        .catch(() => {
          toast.error("error");
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleInvalid = (id: any) => {
    const datas = data.map((item: any) => {
      if (item._id == id) {
        toast.error("not available back later");
      }
    });
    return datas;
  };

  return (
    <div className=" px-4 mb-5 mt-5 ">
      <div>
        <ToastContainer autoClose={2000} />
      </div>
      <div className=" grid grid-cols-3	 place-content-center gap-5 max-h-[95vh]		 overflow-scroll">
        {data.map((item: any, index) => (
          <div className="mt-5 " key={index}>
            <div>
              <Link to={`/home/book/${item._id} `}>
                <img src={item.image} className="w-full h-80		" />
              </Link>
            </div>
            <div className="mt-3 ">
              <p className="text-base	font-bold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackHome;
