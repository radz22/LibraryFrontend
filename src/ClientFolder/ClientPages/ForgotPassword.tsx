import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");

  const handleForget = async () => {
    try {
      await axios
        .post(
          "https://librarybackend-vklf.onrender.com/userRoutes//resetpassword",
          {
            email: email,
          }
        )

        .then((res) => {
          if (res.data.msg == "sucess") {
            toast.success("sucess");
          }
        })
        .catch(() => {
          toast.warn("invalid email");
        });
    } catch {
      toast.error("error");
    }
  };

  return (
    <div className=" w-full gap-20 flex items-center justify-center h-screen px-10 bg-[#F4F4F4]">
      <div className="w-3/6	">
        <div>
          <ToastContainer autoClose={2000} draggable={false} />
        </div>
        <div>
          <h1 className="text-4xl	font-semibold">Forgot Password</h1>
          <p className="text-xl	mt-6">Enter Your Email</p>
        </div>
        <div className="mt-12 w-full">
          <div className="w-full flex items-center justify-between gap-10 ">
            <div className="w-full">
              <input
                type="text"
                className="text-[#616161] border-none w-full text-lg	py-3 px-3 	outline-none bg-transparent"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <div className="bg-black h-[1px]"></div>
            </div>
          </div>
        </div>

        <div className="w-full mt-16 flex items-center justify-center flex-col">
          <div
            className="bg-[#EF4723] w-full text-center px-4 py-4 rounded-2xl	"
            onClick={handleForget}
          >
            <button className="text-white ">Sign up</button>
          </div>
        </div>

        <div className="mt-5 text-center">
          <p>
            Dont have an account?{" "}
            <Link to="/signup">
              <span className="font-bold">Sign up</span>{" "}
            </Link>
          </p>
        </div>
      </div>

      <div className="w-3/6	">
        <div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/girl-forgot-password-4571938-3805759.png?f=webp"
            className="w-full h-96		"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
