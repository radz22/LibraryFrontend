import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if ((email == "" && password == "") || email == "" || password == "") {
      toast.error("pls complete ");
    } else {
      try {
        await axios
          .post(`https://librarybackend-vklf.onrender.com/userRoutes/login`, {
            email,
            password,
          })

          .then((res) => {
            toast.success("sucess");

            if (res.data.type == "user") {
              localStorage.setItem("email", email);
              localStorage.setItem("userid", res.data.id);
              setTimeout(() => {
                navigate(`/home/${res.data.id}`);
              }, 4000);
            } else if (res.data.type == "admin") {
              setTimeout(() => {
                navigate("/admin/home");
              }, 4000);
            }
          })
          .catch(() => {
            toast.error("Invalid User", {
              icon: () => (
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/User_icon-cp.png/1200px-User_icon-cp.png" />
              ),
              draggable: true,
            });
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className=" w-full gap-20 flex items-center justify-center h-screen px-10 bg-[#F4F4F4]">
      <div className="w-3/6	">
        <div>
          <ToastContainer autoClose={2000} draggable={false} />
        </div>
        <div>
          <h1 className="text-4xl	font-semibold">Hey, welcome back!</h1>
          <p className="text-xl	mt-6">Sign in to Library System</p>
        </div>
        <div className="mt-12 w-full">
          <div className="w-full">
            <input
              type="email"
              className="text-[#616161] border-none w-full text-lg	py-3 px-3 	outline-none bg-transparent"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="bg-black h-[1px]"></div>
          </div>

          <div className="w-full mt-3	">
            <div className="flex items-center justify-between">
              <input
                type="password"
                className="text-[#616161] border-none w-full text-lg	py-3 px-3 	outline-none bg-transparent"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="text-3xl	"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    >
                      <path d="M3 13c3.6-8 14.4-8 18 0" />
                      <path
                        fill="currentColor"
                        d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6"
                      />
                    </g>
                  </svg>
                </p>
              </div>
            </div>
            <div className="bg-black h-[1px]"></div>
          </div>
        </div>
        <div className="w-full mt-6 flex items-end justify-end">
          <Link to="forgot">
            <p className="text-sm	text-[#EF4723]">Forget Password?</p>
          </Link>
        </div>

        <div className="w-full mt-16 flex items-center justify-center flex-col">
          <div
            className="bg-[#EF4723] w-full text-center px-4 py-4 rounded-2xl	"
            onClick={handleLogin}
          >
            <button className="text-white ">Sign In</button>
          </div>
          <div className="mt-5">
            <p>
              Dont have an account?{" "}
              <Link to="/signup">
                <span className="font-bold">Sign up</span>{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="w-3/6	">
        <div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png"
            className="w-full h-96	"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
