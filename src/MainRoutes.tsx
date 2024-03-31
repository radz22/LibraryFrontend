import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminAddBook from "./AdminFolder/AdminPage/AdminAddBook";
import AdminBooks from "./AdminFolder/AdminPage/AdminBooks";
import AdminBooksComment from "./AdminFolder/AdminPage/AdminBooksComment";
import AdminContact from "./AdminFolder/AdminPage/AdminContact";
import AdminContactUser from "./AdminFolder/AdminPage/AdminContactUser";
import AdminHome from "./AdminFolder/AdminPage/AdminHome";
import DashBoard from "./AdminFolder/AdminPage/Dashboard";
import About from "./ClientFolder/ClientPages/About";
import BackHome from "./ClientFolder/ClientPages/BackHome";
import Book from "./ClientFolder/ClientPages/Book";
import Chart from "./ClientFolder/ClientPages/Chart";
import Contact from "./ClientFolder/ClientPages/Contact";
import ForgotPassword from "./ClientFolder/ClientPages/ForgotPassword";
import Home from "./ClientFolder/ClientPages/Home";
import ResetPassword from "./ClientFolder/ClientPages/ResetPassword";
import Login from "./ClientFolder/form/Login";
import Signup from "./ClientFolder/form/Signup";
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
          <Route path="/home/backhome" element={<BackHome />} />
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
