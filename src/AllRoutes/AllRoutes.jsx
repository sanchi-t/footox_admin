import React from "react";
import Home from "../Pages/Home";
import { Routes, Route } from "react-router-dom";
import AllProducts from "../Pages/AllProducts";
import Men from "../Pages/Men";
import Women from "../Pages/Women";
import AddProduct from "../Admin/products/addProduct";

import DescriptionPage from "../components/Description/DescriptionPage";
import AllshoesD from "../Pages/Shoes";
import Cart from "../Pages/Cart";
import WishList from "../Pages/WishList";
import Login from "../Pages/Login";
import Register from "../Pages/SignUp";
import Checkout from "../Pages/Checkout";
import Authentication from "../PrivateRoute/Authentication";
import MyAccount from "../Pages/MyAccount";
import AdminPage from "../Admin/AdminPage";
import {AddData} from "../Admin/AddModal";
import { useDispatch} from "react-redux";
import ProductPage from "../Admin/products/viewProduct";
import Stockpage from "../Admin/products/StockPage";
// import { AddData } from "./AddModal";
import { getData } from "../redux/DataReducer/action";
import StockPage from "../Admin/products/StockPage";
import { ViewSku } from "../Admin/products/ViewSku";
import AdminPage1 from "../Admin/products/banner";
import CouponPage from "../Admin/CouponPage";
import AddCoupon from "../Admin/AddCoupon";
import {MyForm} from "../Admin/Instagram"; 

// import Editor from "../Admin/textEditor";
const AllRoutes = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/StockPage" element={<StockPage/>} />
        <Route path="/banner" element={<AdminPage1 />} />
        <Route path="/women" element={<Women />} />
        <Route path="/shoes" element={<AllshoesD />} />
        <Route path="/description/:id" element={<DescriptionPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/viewProduct" element={<ProductPage/>} />
        <Route path ="/viewSku" element={<ViewSku/>} />
        <Route path="/addproduct" element=
        {<AddProduct/>}
        // {<AddData
        //  dispatch={dispatch}
        //  getData={getData}
        // />}
        />
        <Route path ="/Instagram" element={<MyForm/>} />

        <Route
          path="/wishlist"
          element={
            <Authentication>
              <WishList />
            </Authentication>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/myaccount" element={<MyAccount />} />

        <Route path="/register" element={<Register />} />
        <Route
          path="/checkout"
          element={
            <Authentication>
              <Checkout />
            </Authentication>
          }
        />
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
