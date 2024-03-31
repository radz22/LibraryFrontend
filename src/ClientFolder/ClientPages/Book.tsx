import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
  isOpen: boolean;
}
const Book = () => {
  const [data, setData] = useState<Item>();

  const { id } = useParams();
  const [comment, setComment] = useState<string>();
  const [email, setEmail] = useState<string | null>(null);
  const [commentValue, setCommentValue] = useState<any[]>([]);
  const [userid, setUserId] = useState<string>("");
  const [commentEdit, setCommitEdit] = useState<string>("");

  useEffect(() => {
    const storedValue = localStorage.getItem("email");
    if (storedValue) {
      setEmail(storedValue);
    }
    const userid = localStorage.getItem("userid");
    if (userid) {
      setUserId(userid);
    }
  }, []);

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

  const handleBook = async () => {
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

  const handleInvalid = (id: string) => {
    if (id == data?._id) {
      toast.error("not available back later");
    }
  };

  const handleComment = () => {
    try {
      axios
        .post(
          `https://librarybackend-vklf.onrender.com/commentRoutes/${id}/comment`,
          {
            comment: comment,
            email: email,
          }
        )
        .then(() => {
          toast.success("Sucess");
        })
        .catch(() => {
          toast.error("error");
        });
    } catch {
      toast.error("error");
    }

    setComment("");
  };
  const handleEditToggle = async (commentId: string) => {
    try {
      await axios
        .put(
          `https://librarybackend-vklf.onrender.com/commentRoutes/${id}/admintoggle`,
          {
            editid: commentId,
          }
        )
        .then(() => {
          console.log("sucess");
        });
    } catch {
      console.log("error");
    }
  };

  const handleEdit = async (commentId: string) => {
    try {
      await axios
        .put(
          `https://librarybackend-vklf.onrender.com/commentRoutes/${id}/comment`,
          {
            commentId: commentId,
            comment: commentEdit,
          }
        )
        .then(() => {
          handleEditToggle(commentId);
          toast.success("Sucess Edit");
        });
    } catch {
      toast.error("error");
    }
    setCommitEdit("");
  };

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
    <div className="w-full  flex bg-[#e9e9e9]">
      <Link to={`/home/${userid}`}>
        <div className="flex items-start justify-start  py-4 px-4 gap-2  ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
              className="text-4xl cursor-pointer		"
            >
              <rect width="48" height="48" fill="none" />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="4"
                d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <div>
            <h1 className="text-xl	mt-2 font-semibold">Back</h1>
          </div>
        </div>
      </Link>
      <div className="w-full flex items-center justify-center flex-col ">
        <div>
          <ToastContainer autoClose={2000} />
        </div>
        <div className="bg-[#fff] w-6/12  mt-10 	">
          <div className="py-4 px-4">
            <div className="flex items-end justify-end mb-2">
              {data?.borrow ? (
                <div>
                  <h1 className="text-xl	text-[#d41f1f] font-semibold	">
                    2 Days Overdue
                  </h1>
                </div>
              ) : (
                ""
              )}
            </div>
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

            <div className="mt-4 ">
              {data?.borrow ? (
                <p
                  className="text-base font-semibold	text-center py-3 px-3 bg-[#d41f1f] text-white	cursor-pointer	"
                  onClick={() => handleInvalid(data._id)}
                >
                  <s>Not Available</s>
                </p>
              ) : (
                <p
                  className="text-base font-semibold	text-center py-3 px-3 bg-[#bba827] text-white	cursor-pointer	"
                  onClick={handleBook}
                >
                  Get Book Now!
                </p>
              )}
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
                  {item.email == email ? (
                    <div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          className=" text-2xl cursor-pointer		"
                          onClick={() => handleEditToggle(item._id)}
                        >
                          <rect width="24" height="24" fill="none" />
                          <path
                            fill="currentColor"
                            d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15q.4 0 .775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"
                          />
                        </svg>
                      </div>

                      <div className="mt-4">
                        <button onClick={() => handleDelete(item._id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            className="text-[#d51818] text-2xl	cursor-pointer	"
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
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="mt-2">
                {item.email == email ? (
                  <div>
                    {item.isOpen ? (
                      <div className="flex items-center justify-between gap-5">
                        <div className="w-full">
                          <input
                            type="text"
                            className="bg-[#e9e9e9] w-full py-3 px-3	"
                            placeholder="Edit Comment..."
                            value={commentEdit}
                            onChange={(e) => setCommitEdit(e.target.value)}
                          />
                        </div>
                        <div>
                          <button
                            className="py-3 px-3 bg-[#0e1593] text-white rounded-md	"
                            onClick={() => handleEdit(item._id)}
                          >
                            Okay
                          </button>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>

        <div className=" w-6/12 mt-10 bg-[#fff]  rounded-lg">
          <div className="py-3 px-3">
            <div className="mb-2 mt-5">
              <h1 className="font-bold">{email}</h1>
            </div>
            <div>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="py-3 px-3 w-full h-32 border border-[#a2a2a2]   "
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex items-end justify-end mt-5">
              <button
                className="py-3 px-6 bg-[#0e1593] text-white rounded-md	"
                onClick={handleComment}
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
