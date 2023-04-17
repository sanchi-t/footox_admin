import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../Admin/products/addProduct";
import Auth from "../Admin/Auth"
import Signin from "../Admin/Signin";
import PrivateRoute from "../PrivateRoute/Authentication";
import AdminPage1 from "../Admin/products/banner";

import CouponPage from "../Admin/CouponPage";
import AddCoupon from "../Admin/AddCoupon";
import OrderPage from "../Admin/products/orderManagement";
import { useDispatch } from "react-redux";
import ProductPage from "../Admin/products/viewProduct";
import Unauthorized from "../Admin/UnAuthorized";
import OfferBanner from "../Admin/AddOfferBanner";
import StockPage2 from "../Admin/products/StockPage2";
import { Users } from "../Admin/Users";
import { MyForm } from "../Admin/Instagram";
import SendMail from "../Admin/products/sendMail";
import { AuthContext } from "../Admin/Context/authProvider";
import ReturnPage from "../Admin/products/returnManagement";
import ExchangePage from "../Admin/products/exchangeManagement";
const AllRoutes = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState({});
  return (
    <div>
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route element={<Auth allowedRoles={['superadmin', 'admin']} />}>
            <Route path="/addProduct" element={
              <PrivateRoute>
                <AddProduct />
              </PrivateRoute>
            } />
          </Route>

          <Route element={<Auth allowedRoles={['superadmin', 'admin']} />}>
            <Route path="/banner" element={
              <PrivateRoute>
                <AdminPage1 />
              </PrivateRoute>
            } />
          </Route>

          <Route element={<Auth allowedRoles={['superadmin', 'admin', 'supervisor']} />}>
            <Route path="/StockPage" element={
              <PrivateRoute>
                <StockPage2 />
              </PrivateRoute>
            } />
          </Route>

          
          <Route element={<Auth allowedRoles={['superadmin', 'admin', 'operator', 'supervisor']} />}>
            <Route path="/viewProduct" element={
              <PrivateRoute>
                <ProductPage />
              </PrivateRoute>
            } />
          </Route>

          <Route element={<Auth allowedRoles={['superadmin']} />}>
            <Route path="/users" element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            } />
          </Route>
          <Route element={<Auth allowedRoles={['superadmin', 'admin', 'operator', 'supervisor']} />}>
            <Route path="/offerBanner" element={
              <PrivateRoute>
                <OfferBanner />
              </PrivateRoute>
            } />
          </Route>

          <Route element={<Auth allowedRoles={['superadmin', 'admin', 'supervisor']} />}>
            <Route path="/orderManagement" element={<OrderPage />} />
          </Route>
          <Route element={<Auth allowedRoles={['superadmin', 'admin', 'supervisor']} />}>
            <Route path="/returnOrders" element={<ReturnPage />} />
          </Route>

          <Route element={<Auth allowedRoles={['superadmin', 'admin', 'supervisor']} />}>
            <Route path="/exchangeOrders" element={<ExchangePage />} />
          </Route>

          <Route element={<Auth allowedRoles={['superadmin', 'admin', 'operator', 'supervisor']} />}>
            <Route path="/Instagram" element={<MyForm />} />
          </Route>

          <Route path="/SendMail" element={<SendMail />} />

          <Route element={<Auth allowedRoles={['superadmin', 'admin', 'supervisor']} />}>
            <Route
              path="/coupon"
              element={
                <>
                  <CouponPage />
                </>
              }
            />
          </Route>
          
          <Route element={<Auth allowedRoles={['superadmin', 'admin']} />}>
            <Route
              path="/couponAdd"
              element={
                <>
                  <AddCoupon />
                </>
              }
            />
          </Route>
        </Routes>
      </AuthContext.Provider>
    </div >
  );
};

export default AllRoutes;
