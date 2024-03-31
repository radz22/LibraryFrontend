import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SideBarAdmin = () => {
  const navigate = useNavigate();
  const handleDeleteItem = () => {
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
        <h1 className="mt-7 text-2xl text-white	">Hello Admin</h1>
      </div>
      <div className="flex items-center gap-4  mt-16">
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
              d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z"
            />
          </svg>
        </div>
        <div>
          <Link to="/admin/home">
            {" "}
            <p className="text-white text-2xl		">Dashboard</p>
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#c2bbbb] mt-4"></div>

      <div className="flex items-center gap-4  mt-10">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            className="text-white text-3xl"
          >
            <rect width="32" height="32" fill="none" />
            <path
              fill="currentColor"
              d="M26.68 7.858a.595.595 0 0 0-.607-.083l-9.66 4.183c-.42.183-.946.27-1.486.27c-.753.003-1.532-.172-2.075-.41a2.523 2.523 0 0 1-.47-.26c.04-.02.09-.042.145-.064l8.786-3.804l1.31.56V6.613a.775.775 0 0 0-.283-.612a.592.592 0 0 0-.605-.083l-9.66 4.183c-.298.12-.554.268-.77.483a1.327 1.327 0 0 0-.395.934c0 .01.003.027.003.027v14.73l-.002.02c0 .004.003.006.003.01v.016h.002c.02.515.28.843.528 1.075c.78.688 2.09 1.073 3.484 1.093c.66 0 1.33-.1 1.95-.366l9.663-4.184c.255-.11.422-.383.422-.692V8.47a.781.781 0 0 0-.283-.612m-6.127-2.8c-.017-.22-.108-.43-.27-.556a.595.595 0 0 0-.607-.083L10.016 8.6c-.42.182-.947.27-1.486.27c-.753.002-1.532-.173-2.075-.412a2.448 2.448 0 0 1-.47-.258c.04-.02.09-.042.145-.064l8.787-3.804l1.31.56V3.257a.776.776 0 0 0-.284-.612a.594.594 0 0 0-.606-.083l-9.66 4.184c-.298.12-.553.267-.77.483a1.327 1.327 0 0 0-.394.934c0 .012.003.028.003.028v14.777h.002c.02.515.28.843.528 1.075c.78.688 2.09 1.072 3.485 1.092a5.57 5.57 0 0 0 1.127-.122V11.544c-.01-.7.27-1.372.762-1.856a3.476 3.476 0 0 1 1.19-.756z"
            />
          </svg>
        </div>
        <div>
          <Link to="/admin/books">
            <p className="text-white text-2xl		">Books</p>
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#c2bbbb] mt-4"></div>
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
          <Link to={`/admin/contact`}>
            <p className="text-white text-2xl		">Contact</p>
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#c2bbbb] mt-4"></div>

      <div className="flex items-center gap-4  mt-10">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 100 100"
            className="text-white text-3xl		"
          >
            <rect width="100" height="100" fill="none" />
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M100 22.5v-.29a2.5 2.5 0 0 0-.014-.265c.005.185.014.369.014.555M74 10h7v9h9v7h-9v9h-7v-9h-9v-7h9zm3.5-5C67.805 5 60 12.805 60 22.5S67.805 40 77.5 40S95 32.195 95 22.5S87.195 5 77.5 5"
              color="currentColor"
            />
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="m5 11.418l27.275 12.67l.371 64.95L5 76.192ZM2.586 5.002A2.5 2.5 0 0 0 0 7.5v70.29a2.5 2.5 0 0 0 1.447 2.267l31.666 14.71A2.5 2.5 0 0 0 34.19 95a2.5 2.5 0 0 0 1.032-.232l30.613-14.221l30.613 14.22A2.5 2.5 0 0 0 100 92.5v-70a22.382 22.382 0 0 1-5 14.111v51.971L67.322 75.725l-.19-33.27a22.575 22.575 0 0 1-3.01-1.883l.2 35.162l-28.676 13.323l-.369-64.606l21.15-9.826a22.568 22.568 0 0 1 4.991-7.832l-27.252 12.66L3.553 5.233a2.5 2.5 0 0 0-.967-.231"
              color="currentColor"
            />
          </svg>
        </div>
        <div>
          <Link to={`/admin/addbook`}>
            <p className="text-white text-2xl		">Add Book</p>
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#c2bbbb] mt-4"></div>

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

      <div className="w-full h-[1px] bg-[#c2bbbb] mt-4"></div>

      <div>
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default SideBarAdmin;
