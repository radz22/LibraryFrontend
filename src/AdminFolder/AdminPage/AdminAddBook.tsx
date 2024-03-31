import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import SideBarAdmin from "../AdminComponents/SideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminAddBook = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [base64Image, setBase64Image] = useState<string>("");
  const navigate = useNavigate();
  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setBase64Image(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const handleCreate = async () => {
    try {
      await axios
        .post(`https://librarybackend-vklf.onrender.com/booksRoutes`, {
          photo: base64Image,
          title: title,
          description: description,
          author: author,
        })
        .then(() => {
          toast.success("sucess");
        });
    } catch {
      toast.error("erorr");
    }
    setBase64Image("");
  };

  return (
    <div className="w-full  flex">
      <div>
        <ToastContainer autoClose={2000} draggable={false} />
      </div>
      <div className={`w-1/4	 bg-[#343a40] h-screen`}>
        <SideBarAdmin />
      </div>

      <div className="w-3/4	 px-4 mb-5  bg-[#f9f9f9] flex items-center justify-center flex-col ">
        <div className="w-3/5 bg-[#fff] py-3 px-3">
          <div>
            {base64Image ? (
              <div className="flex items-center justify-center 	">
                <img src={base64Image} className="w-4/5	h-60	rounded-lg	" />
              </div>
            ) : (
              <div className="flex items-center justify-center 	">
                <img
                  src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg "
                  className="w-4/5	h-60	rounded-lg	"
                />
              </div>
            )}
          </div>
          <div className="mt-5 w-full py-3 px-3 ">
            <div>
              <input
                type="file"
                accept="image/*"
                className="text-xl	"
                onChange={handleFileInputChange}
              />
            </div>
          </div>

          <div className="mt-5 w-full py-3 px-3 text-2xl ">
            <input
              type="text"
              placeholder="Title"
              className="w-full  outline-none bg-[#e2e0e0]  py-4 px-4 rounded-xl "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mt-1 w-full py-3 px-3 text-2xl ">
            <textarea
              className="w-full  outline-none bg-[#e2e0e0]  py-4 px-4 rounded-xl h-56	"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mt-1 w-full py-3 px-3 text-2xl ">
            <input
              type="text"
              placeholder="Author"
              className="w-full  outline-none bg-[#e2e0e0]  py-4 px-4 rounded-xl "
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div
            className="mt-5 py-3 mr-4  bg-[#7180d2]  rounded-2xl		text-center"
            onClick={handleCreate}
          >
            <div>
              <button className="text-[#fff] text-2xl	 font-semibold py-2 px-2 	">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddBook;
