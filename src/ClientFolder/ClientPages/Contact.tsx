import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import SideBar from "../Components/SideBar";

interface Message {
  admin: string;
  adminmessage: string;
  client: string;
  clientmesssage: string;
}
const Contact = () => {
  const { id } = useParams();
  const [message, setMessage] = useState<Message[]>([]);
  const [sendMessage, setSendMessage] = useState<string>("");
  const [email, setEmail] = useState<string | null>(null);

  const fetchMessage = async () => {
    try {
      await axios
        .get(`https://librarybackend-vklf.onrender.com/contactRoutes/${id}/`)
        .then((res: any) => {
          setMessage(res.data);
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
      fetchMessage();
    }, 1000);
  }, []);

  useEffect(() => {
    const storedValue = localStorage.getItem("email");
    if (storedValue) {
      setEmail(storedValue);
    }
  }, []);

  const handleSendMessage = async () => {
    if (sendMessage !== "") {
      try {
        await axios.post(
          `https://librarybackend-vklf.onrender.com/contactRoutes/${id}/usermessage`,
          {
            client: email,
            clientmesssage: sendMessage,
          }
        );
      } catch {
        toast.error("erorr");
      }
    } else {
      toast.error("empty");
    }

    setSendMessage("");
  };
  return (
    <div className="w-full  flex ">
      <div className="w-1/4	 bg-[#343a40] h-screen">
        <SideBar />
      </div>

      <div className="w-3/4  bg-[#e2e0e0]   flex items-center justify-center flex-col 	">
        <div className="w-3/4	 h-[60vh] bg-[#fff]	overflow-scroll">
          <div className="px-4 py-4 w-full bg-neutral-500	">
            <h1 className="text-xl	font-bold text-white">Admin</h1>
          </div>
          <div className="mt-12 py-4 px-4  ">
            {message.map((item) => (
              <div className="bg-[#fff] py-3 px-3 mt-4 rounded-lg ">
                <div className="py-4 px-4 rounded-lg   flex items-center justify-between	  ">
                  <div className=" bg-[#e2e0e0]  py-4 px-4 rounded-lg">
                    <h1 className="font-semibold ">{item.admin}</h1>
                    <h1>{item.adminmessage}</h1>
                  </div>
                  <div className="bg-[#e2e0e0] py-4 px-4 rounded-lg">
                    <h1 className="font-semibold ">{item.client}</h1>
                    <h1>{item.clientmesssage}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-3/4 flex items-center justify-between bg-[#fff]">
          <div className="w-full 	mt-5 py-4 px-2">
            <input
              type="text"
              className="w-full  outline-none bg-[#e2e0e0]  py-3 px-3 rounded-xl	 "
              placeholder="Enter Message..."
              value={sendMessage}
              onChange={(e) => setSendMessage(e.target.value)}
            />
          </div>
          <div className="mt-5 py-3 mr-4 flex items-center justify-center bg-[#7180d2] w-1/5	gap-2 rounded-2xl		">
            <div>
              <button
                className="text-[#fff] text-lg font-semibold	"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-[#fff] text-2xl	"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14L21 3m0 0l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default Contact;
