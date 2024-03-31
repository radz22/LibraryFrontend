import axios from "axios";
import { useState, useEffect } from "react";
import SideBarAdmin from "../AdminComponents/SideBar";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

interface Item {
  image: string;
  title: string;
  description: string;
  author: string;
  expired?: boolean;
  count?: number;
}
const AdminBooks = () => {
  const [data, setData] = useState<Item[]>([]);

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
  }, []);

  const handleDeleteBook = (id: string) => {
    try {
      axios
        .delete(`https://librarybackend-vklf.onrender.com/booksRoutes/${id}`)
        .then(() => {
          toast.success("sucess delete");
        })
        .catch((err: any) => {
          console.log(err);
        });
    } catch {
      toast.error("error");
    }
  };
  return (
    <div className="w-full  flex">
      <div className={`w-1/4	 bg-[#343a40] h-screen`}>
        <SideBarAdmin />
      </div>

      <div className="w-3/4	 px-4 mb-5  bg-[#f9f9f9] max-h-[95vh] overflow-auto		">
        <div className=" grid grid-cols-3	 place-content-center gap-5">
          {data.map((item: any, index) => (
            <div className="mt-5 " key={index}>
              <div>
                <Link to={`/admin/bookscomment/${item._id}`}>
                  <img src={item.image} className="w-full h-80		" />
                </Link>
              </div>
              <div className="mt-3 ">
                <p className="text-base	font-bold">{item.title}</p>
              </div>

              <div className="mt-3 ">
                <p className="text-base	">{item.description}</p>
              </div>

              <div className="mt-3 ">
                <p className="text-base font-semibold	">by: {item.author}</p>
              </div>

              <div className="flex  mt-5 justify-end">
                <div
                  className="bg-[#d41f1f] flex items-center gap-2 px-3 py-4 rounded-lg	"
                  onClick={() => handleDeleteBook(item._id)}
                >
                  <div>
                    <button className="text-white text-xl	font-semibold">
                      Delete Book
                    </button>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="text-white text-2xl	"
                    >
                      <rect width="24" height="24" fill="none" />
                      <path
                        fill="currentColor"
                        d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default AdminBooks;
