import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleSignup = async () => {
    if (password.length >= 5) {
      try {
        await axios
          .post("https://librarybackend-vklf.onrender.com/userRoutes/signup", {
            name,
            email,
            password,
          })

          .then((res) => {
            toast.success("sucess");
            if (res.data.msg == "create") {
              setTimeout(() => {
                navigate("/");
              }, 4000);
            }
          })

          .catch(() => {
            toast.error("existing user");
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.warn("your password is weak");
    }
  };

  return (
    <div className=" w-full gap-20 flex items-center justify-center h-screen px-10 bg-[#F4F4F4]">
      <div className="w-3/6	">
        <div>
          <ToastContainer autoClose={2000} />
        </div>
        <div>
          <h1 className="text-4xl	font-semibold">Be part of our Journey!</h1>
          <p className="text-xl	mt-6">Sign up to Library System</p>
        </div>
        <div className="mt-12 w-full">
          <div className="w-full flex items-center justify-between gap-10 ">
            <div className="w-3/6">
              <input
                type="text"
                className="text-[#616161] border-none w-full text-lg	py-3 px-3 	outline-none bg-transparent"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value.toUpperCase())}
              />
              <div className="bg-black h-[1px]"></div>
            </div>
            <div className="w-3/6">
              <input
                type="email"
                className="text-[#616161] border-none w-full text-lg	py-3 px-3 	outline-none bg-transparent"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="bg-black h-[1px]"></div>
            </div>
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

          <div className="w-full mt-3	">
            <div className="flex items-center justify-between">
              <input
                type="password"
                className="text-[#616161] border-none w-full text-lg	py-3 px-3 	outline-none bg-transparent"
                placeholder="Confirm Password"
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

        <div className="w-full mt-16 flex items-center justify-center flex-col">
          <div
            className="bg-[#EF4723] w-full text-center px-4 py-4 rounded-2xl	"
            onClick={handleSignup}
          >
            <button className="text-white ">Sign up</button>
          </div>
        </div>
      </div>

      <div className="w-3/6	">
        <div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-8694031-6983270.png?f=webp"
            className="w-full 	"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
