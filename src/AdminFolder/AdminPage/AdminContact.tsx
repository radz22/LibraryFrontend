import { useState, useEffect } from "react";
import SideBarAdmin from "../AdminComponents/SideBar";
import axios from "axios";
import { Link } from "react-router-dom";
interface user {
  _id: string;
  name: string;
  email: string;
  password: string;
  usertype: string;
  message: string[];
}
const AdminContact = () => {
  const [user, setUser] = useState<user[]>([]);

  const fetchUser = async () => {
    try {
      await axios
        .get(`https://librarybackend-vklf.onrender.com/userRoutes/`)
        .then((res: any) => {
          setUser(res.data.findAll);
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
      fetchUser();
    }, 1000);
  }, []);

  return (
    <div className="w-full  flex">
      <div className={`w-1/4	 bg-[#343a40] h-screen`}>
        <SideBarAdmin />
      </div>

      <div className="w-3/4	 px-4 mb-5  bg-[#f9f9f9] mt-5">
        <div>
          <h1 className="text-center text-3xl	font-semibold">Client Contact</h1>
        </div>

        <div className="w-full grid grid-cols-2 place-items-center gap-4 mt-20 max-h-[95vh] overflow-auto">
          {user
            .filter((item) => item.usertype !== "admin")
            .map((item) => (
              <Link to={`/admin/contact/${item._id}`}>
                <div className="bg-[#7180d2]  py-4 px-4 mt-4 rounded-xl gap-2	 flex items-center justify-center">
                  <div>
                    <h1 className="text-white text-xl		">{item.email}</h1>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="text-[#fff] text-3xl	"
                    >
                      <rect width="24" height="24" fill="none" />
                      <path
                        fill="currentColor"
                        d="M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminContact;
