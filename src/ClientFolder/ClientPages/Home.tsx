import React, { useState, useEffect } from "react";
import SideBar from "../Components/SideBar";
import BackHome from "./BackHome";
import axios from "axios";

interface user {
  _id: string;
  name: string;
  email: string;
  password: string;
  usertype: string;
}
const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [data, setData] = useState<any>();
  const fetchData = async () => {
    try {
      await axios
        .get(`https://librarybackend-vklf.onrender.com/booksRoutes`)
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
    /* for realtime fetching*/
    setInterval(() => {
      fetchData();
    }, 1000);
    /* get email from local storage */
    const storedInput = localStorage.getItem("email");
    if (storedInput) {
      setEmail(storedInput);
    }
  }, []);

  return (
    <div className="w-full  flex gap-5">
      {/* ${
          data == undefined ? "h-screen" : "h-auto"
        } */}
      <div className={`w-1/4	 bg-[#343a40] h-screen `}>
        <SideBar />
      </div>

      <div className="w-3/4		 ">
        <BackHome email={email} />
      </div>
    </div>
  );
};

export default Home;
