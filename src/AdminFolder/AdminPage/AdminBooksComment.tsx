import { useState, useEffect } from "react";
import SideBarAdmin from "../AdminComponents/SideBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

interface Item {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: string;
  expired?: boolean;
  count?: number;
  comments: any[];
  borrow: boolean;
}

const AdminBooksComment = () => {
  const [data, setData] = useState<Item>();
  const { id } = useParams();
  const [commentValue, setCommentValue] = useState<any[]>([]);
  const fetchData = async () => {
    try {
      axios
        .get(`https://librarybackend-vklf.onrender.com/booksRoutes/${id}`)
        .then((res: any) => {
          setData(res.data);
        })
        .catch(() => {
          console.log("error");
        });
    } catch (err) {
      console.log(err);
    }
  };

  const realtimeCommentFetch = () => {
    try {
      axios
        .get(
          `https://librarybackend-vklf.onrender.com/commentRoutes/${id}/comment`
        )
        .then((res: any) => {
          setCommentValue(res.data);
        })
        .catch(() => {
          console.log("error");
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setInterval(() => {
      fetchData(), realtimeCommentFetch();
    }, 1000);
  }, []);

  const handleDelete = async (commentId: string) => {
    try {
      toast.success("Sucess");
      setTimeout(() => {
        axios.post(
          `https://librarybackend-vklf.onrender.com/commentRoutes/${id}/delete`,
          {
            commentId: commentId,
          }
        );
      }, 4000);
    } catch {
      toast.error("error");
    }
  };

  return (
    <div className="w-full  flex">
      <div className={`w-1/4	 bg-[#343a40] h-screen`}>
        <SideBarAdmin />
      </div>

      <div className="w-3/4   flex items-center justify-center flex-col bg-[#e9e9e9]	">
        <div className="bg-[#fff] w-6/12  mt-10	">
          <div className="py-4 px-4">
            <div className="w-full flex items-center justify-center ">
              <img src={data?.image} className="w-5/6		h-60	" />
            </div>
            <div className="mt-5 ">
              <p className="text-base	font-bold">{data?.title}</p>
            </div>

            <div className="mt-3 ">
              <p className="text-base	">{data?.description}</p>
            </div>

            <div className="mt-3 ">
              <p className="text-base font-semibold	">by: {data?.author}</p>
            </div>
          </div>
        </div>

        <div className="w-6/12 mt-5 h-80		overflow-scroll	">
          {commentValue.map((item) => (
            <div className="bg-[#fff] py-3 px-3 mt-4 rounded-lg">
              <div className=" flex items-center justify-between	">
                <div>
                  <h1 className="font-semibold">{item.email}</h1>
                  <h1 className="mt-1">{item.comment}</h1>
                </div>
                <div>
                  <div>
                    <button onClick={() => handleDelete(item._id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="text-[#d51818] text-2xl	"
                      >
                        <rect width="24" height="24" fill="none" />
                        <path
                          fill="currentColor"
                          d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
                        />
                      </svg>
                    </button>
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

export default AdminBooksComment;
