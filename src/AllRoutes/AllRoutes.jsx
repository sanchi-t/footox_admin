import React from "react";
// import Home from "../Pages/Home";
import { Routes, Route } from "react-router-dom";
// import AllProducts from "../Pages/AllProducts";
// import Men from "../Pages/Men";
// import Women from "../Pages/Women";
import AddProduct from "../Admin/products/addProduct";

// import DescriptionPage from "../components/Description/DescriptionPage";
// import AllshoesD from "../Pages/Shoes";
// import Cart from "../Pages/Cart";
// import WishList from "../Pages/WishList";
// import Login from "../Pages/Login";
// import Register from "../Pages/SignUp";
// import Checkout from "../Pages/Checkout";
import Authentication from "../PrivateRoute/Authentication";
// import MyAccount from "../Pages/MyAccount";
import AdminPage from "../Admin/AdminPage";
import {AddData} from "../Admin/AddModal";
// import { AddData } from "./AddModal";
// import StockPage from "../Admin/products/StockPage";
import AdminPage1 from "../Admin/products/banner";
import CouponPage from "../Admin/CouponPage";
import AddCoupon from "../Admin/AddCoupon";

// import Editor from "../Admin/textEditor";
import OrderPage from "../Admin/products/orderManagement";
import { useDispatch} from "react-redux";
import ProductPage from "../Admin/products/viewProduct";
// import {Stockpage1} from "../Admin/products/StockPage1";
// import { StockPage1 } from "../Admin/products/StockPage1";
import OfferBanner from "../Admin/AddOfferBanner";
import { getData } from "../redux/DataReducer/action";
import StockPage2 from "../Admin/products/StockPage2";
import { ViewSku } from "../Admin/products/ViewSku";
// import { ViewDetails } from "../Admin/products/viewDetails";
import { MyForm } from "../Admin/Instagram";
import SendMail from "../Admin/products/sendMail";
// import {Banner} from "../Admin/products/banner"
const AllRoutes = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Routes>
        <Route path="/" element={<AddProduct />} />
        {/* <Route path="/allproducts" element={<AllProducts />} /> */}
        {/* <Route path="/StockPage" element={<StockPage/>} /> */}
        <Route path="/banner" element={<AdminPage1 />} />
        <Route path="/StockPage" element={<StockPage2/>} />
        {/* <Route path="/women" element={<Women />} /> */}
        {/* <Route path="/shoes" element={<AllshoesD />} /> */}
        {/* <Route path="/description/:id" element={<DescriptionPage />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/viewProduct" element={<ProductPage/>} />
        <Route path ="/viewSku" element={<ViewSku/>} />
        <Route path ="/offerBanner" element={<OfferBanner/>} />
        <Route path ="/orderManagement" element={<OrderPage/>} />
        {/* <Route path ="/viewDetails" element={<ViewDetails/>} /> */}
        <Route path ="/Instagram" element={<MyForm/>} />
        <Route path ="/SendMail" element={<SendMail/>} />
        <Route path="/addproduct" element=
        {<AddProduct/>}
        />
        {/* <Route
          path="/wishlist"
          element={
            <Authentication>
              <WishList />
            </Authentication>
          }
        /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/myaccount" element={<MyAccount />} /> */}

        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route
          path="/checkout"
          element={
            <Authentication>
              <Checkout />
            </Authentication>
          }
        /> */}
        <Route
          path="/admin"
          element={
            // <Authentication>
              <AdminPage />
            // </Authentication>
          }
        />
        <Route
          path="/coupon"
          element={
            <>
              <CouponPage />
            </>
          }
        />
        <Route
          path="/couponAdd"
          element={
            <>
              <AddCoupon />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
