import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SideBar: React.FC = () => {
  const [userData, setUserData] = useState<any>({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://librarybackend-vklf.onrender.com/userRoutes/userpick/${id}`)
      .then((res: any) => {
        setUserData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleDeleteItem = () => {
    localStorage.removeItem("email");
    toast.success("Logout sucess");

    setTimeout(() => {
      navigate(`/`);
    }, 4000);
  };

  return (
    <div className="px-4 py-5">
      <div className="">
        <h1 className="text-3xl	font-bold text-white">
          Santy <span className="text-[#d3db13]">Library</span>
        </h1>
      </div>
      <div>
        <ToastContainer autoClose={2000} draggable={false} />
      </div>
      <div>
        <h1 className="mt-7 text-2xl text-white	">
          {" "}
          Hello!!! <span className="font-bold">{userData.name}</span>
        </h1>
      </div>
      <div className="flex items-center gap-4  mt-16">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 512 512"
            className="text-white text-3xl		"
          >
            <path
              fill="currentColor"
              d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"
            />
            <path
              fill="currentColor"
              d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97"
            />
          </svg>
        </div>
        <div>
          <Link to={`/home/${id}`}>
            {" "}
            <p className="text-white text-2xl		">Home</p>
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#c2bbbb] mt-6"></div>

      <div className="flex items-center gap-4  mt-10">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            className="text-white text-3xl		"
          >
            <path
              fill="currentColor"
              d="m16 3.906l-.375.156l-12 5L3 9.345V12h2v11H3v5h26v-5h-2V12h2V9.344l-.625-.28l-12-5.002zm0 2.188L25.375 10H6.625zM7 12h2v11H7zm4 0h2v11h-2zm4 0h2v11h-2zm4 0h2v11h-2zm4 0h2v11h-2zM5 25h22v1H5z"
            />
          </svg>
        </div>
        <div>
          <Link to={`/home/About/${id}`}>
            {" "}
            <p className="text-white text-2xl		">About</p>
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#c2bbbb] mt-6"></div>

      <div className="flex items-center gap-4  mt-10">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="text-white text-3xl		"
          >
            <path
              fill="currentColor"
              d="M20 13.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75H14V4.25c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484c-.057-.057-.159-.128-.484-.172C12.949 2.002 12.478 2 11.75 2c-.728 0-1.2.002-1.546.048c-.325.044-.427.115-.484.172c-.057.057-.128.159-.172.484c-.046.347-.048.818-.048 1.546V20.5H8V8.75A.75.75 0 0 0 7.25 8h-3a.75.75 0 0 0-.75.75V20.5H1.75a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5H20z"
            />
          </svg>
        </div>
        <div>
          <Link to={`/home/chart/${id}`}>
            <p className="text-white text-2xl		">Chart</p>
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#c2bbbb] mt-6"></div>

      <div className="flex items-center gap-4  mt-10">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="text-white text-3xl		"
          >
            <path
              fill="currentColor"
              d="M19.75 4A2.25 2.25 0 0 1 22 6.25v11.505a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 17.755V6.25A2.25 2.25 0 0 1 4.25 4zm0 1.5H4.25a.75.75 0 0 0-.75.75v11.505c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75V6.25a.75.75 0 0 0-.75-.75m-10 7a.75.75 0 0 1 .75.75v.493l-.008.108c-.163 1.113-1.094 1.65-2.492 1.65s-2.33-.537-2.492-1.65l-.008-.11v-.491a.75.75 0 0 1 .75-.75zm3.502.496h4.498a.75.75 0 0 1 .102 1.493l-.102.007h-4.498a.75.75 0 0 1-.102-1.493zh4.498zM8 8.502a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5.252.998h4.498a.75.75 0 0 1 .102 1.493L17.75 11h-4.498a.75.75 0 0 1-.102-1.493zh4.498z"
            />
          </svg>
        </div>
        <div>
          <Link to={`/home/contact/${id}`}>
            <p className="text-white text-2xl		">Contact</p>
          </Link>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#c2bbbb] mt-6"></div>

      <div className="flex items-center gap-4  mt-10">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="text-white text-3xl		"
          >
            <path
              fill="currentColor"
              d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"
            />
          </svg>
        </div>
        <div>
          <p
            className="text-white text-2xl	cursor-pointer		"
            onClick={handleDeleteItem}
          >
            Logout
          </p>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#c2bbbb] mt-6"></div>
    </div>
  );
};

export default SideBar;
