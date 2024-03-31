import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./ClientFolder/form/Signup";
import Login from "./ClientFolder/form/Login";
import DashBoard from "./AdminFolder/AdminPage/Dashboard";
import Home from "./ClientFolder/ClientPages/Home";
import ResetPassword from "./ClientFolder/ClientPages/ResetPassword";
import ForgotPassword from "./ClientFolder/ClientPages/ForgotPassword";
import BackHome from "./ClientFolder/ClientPages/BackHome";
import Chart from "./ClientFolder/ClientPages/Chart";
import Contact from "./ClientFolder/ClientPages/Contact";
import About from "./ClientFolder/ClientPages/About";
import AdminHome from "./AdminFolder/AdminPage/AdminHome";
import AdminBooks from "./AdminFolder/AdminPage/AdminBooks";
import Book from "./ClientFolder/ClientPages/Book";
import AdminBooksComment from "./AdminFolder/AdminPage/AdminBooksComment";
import AdminContact from "./AdminFolder/AdminPage/AdminContact";
import AdminContactUser from "./AdminFolder/AdminPage/AdminContactUser";
import AdminAddBook from "./AdminFolder/AdminPage/AdminAddBook";
const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Client Routes*/}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home/:id" element={<Home />} />
          <Route path="/resetpassword/:id" element={<ResetPassword />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/home/backhome" element={<BackHome email={""} />} />
          <Route path="/home/chart/:id" element={<Chart />} />
          <Route path="/home/contact/:id" element={<Contact />} />
          <Route path="/home/About/:id" element={<About />} />
          <Route path="/home/book/:id" element={<Book />} />

          {/* Admin Routes*/}
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/dashboard" element={<DashBoard />} />
          <Route path="/admin/books" element={<AdminBooks />} />
          <Route path="/admin/contact" element={<AdminContact />} />
          <Route path="/admin/contact/:id" element={<AdminContactUser />} />
          <Route
            path="/admin/bookscomment/:id"
            element={<AdminBooksComment />}
          />

          <Route path="/admin/addbook/" element={<AdminAddBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
