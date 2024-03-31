import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const ResetPassword = () => {
  const [password, setPassword] = useState<string>("");
  const { id } = useParams();

  const navigate = useNavigate();

  const handleReset = async () => {
    try {
      await axios
        .put(
          `https://librarybackend-vklf.onrender.com/userRoutes/reset_password/${id}`,
          {
            password: password,
          }
        )

        .then((res) => {
          toast.success("sucess!!");
          if (res.data.msg == "sucess updated") {
            setTimeout(() => {
              navigate("/");
            }, 4000);
          }
        })
        .catch(() => {
          toast.error("error!!");
        });
    } catch {
      toast.error("error!!");
    }
  };
  return (
    <div className=" w-full gap-20 flex items-center justify-center h-screen px-10 bg-[#F4F4F4]">
      <div className="w-3/6	">
        <div>
          <ToastContainer autoClose={2000} />
        </div>
        <div>
          <h1 className="text-4xl	font-semibold">Forgot Password</h1>
          <p className="text-xl	mt-6">Enter Your New Password</p>
        </div>
        <div className="mt-12 w-full">
          <div className="w-full flex items-center justify-between gap-10 ">
            <div className="w-full">
              <input
                type="text"
                className="text-[#616161] border-none w-full text-lg	py-3 px-3 	outline-none bg-transparent"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="bg-black h-[1px]"></div>
            </div>
          </div>
        </div>

        <div className="w-full mt-16 flex items-center justify-center flex-col">
          <div
            className="bg-[#EF4723] w-full text-center px-4 py-4 rounded-2xl	"
            onClick={handleReset}
          >
            <button className="text-white ">Update Password</button>
          </div>
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

export default ResetPassword;
