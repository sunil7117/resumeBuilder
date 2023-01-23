import Header from "../components/Header";
import Footer from "../components/Footer";
import Category from "../components/Category";
import Banner from "../components/Hero";
import React from "react";
import "./checkout.css";

const Checkout = () => {
  return (
    <div>
      <Header />
      <Category />
      <Banner />
      <div className="checkout">
        <div className="coupon">
          <p>
            <span>t</span> Have a coupon? Click here to enter your code
          </p>
        </div>
        <h1 className="bill">Billing Details</h1>
        <div className="checkouts">
          <div className="form">
            <div className="grid grid-6 grid-gap">
              <div className="w-100">
                <label htmlFor="">
                  Frist Name <span className="mark">*</span>
                </label>
                <input type="text" className="w-100 formInput" />
              </div>
              <div className="w-100">
                <label htmlFor="">
                  Last Name <span className="mark">*</span>
                </label>
                <input type="text" className="w-100 formInput" />
              </div>
            </div>
            <div className="grid grid-12 grid-gap">
              <div className="w-100">
                <label htmlFor="">
                  Country <span className="mark">*</span>
                </label>
                <input type="text" className="w-100 formInput" />
              </div>
            </div>
            <div className="grid grid-12 grid-gap">
              <div className="w-100">
                <label htmlFor="">
                  Address<span className="mark">*</span>
                </label>
                <input
                  type="text"
                  placeholder="street address"
                  className="w-100 formInput"
                />
                <input
                  type="text"
                  placeholder="apartment"
                  className="w-100 formInput"
                />
              </div>
            </div>
            <div className="grid grid-12 grid-gap">
              <div className="w-100">
                <label htmlFor="">
                  Town / city <span className="mark">*</span>
                </label>
                <input type="text" className="w-100 formInput" />
              </div>
            </div>
            <div className="grid grid-12 grid-gap">
              <div className="w-100">
                <label htmlFor="">
                  Country/ state <span className="mark">*</span>
                </label>
                <input type="text" className="w-100 formInput" />
              </div>
            </div>
            <div className="grid grid-12 grid-gap">
              <div className="w-100">
                <label htmlFor="">
                  Postcode/zip <span className="mark">*</span>
                </label>
                <input type="text" className="w-100 formInput" />
              </div>
            </div>
            <div className="grid grid-6 grid-gap">
              <div className="w-100">
                <label htmlFor="">
                  Phone <span className="mark">*</span>
                </label>
                <input type="text" className="w-100 formInput" />
              </div>
              <div className="w-100">
                <label htmlFor="">
                  Email <span className="mark">*</span>
                </label>
                <input type="text" className="w-100 formInput" />
              </div>
            </div>
            <div className="grid grid-12 grid-gap">
              <div className="w-100">
                <input type="checkbox" className="formInput checkbox" />
                <label htmlFor="">Account Password</label>
                <p>
                  Create an account by entering the information below. If you
                  are a returning customer please login at the top of the page
                </p>
              </div>
            </div>
            <div className="grid grid-12 grid-gap">
              <div className="w-100">
                <label htmlFor="">
                  Account Password <span className="mark">*</span>
                </label>
                <input type="text" className="w-100 formInput" />
              </div>
            </div>
            <div className="grid grid-12 grid-gap">
              <div className="w-100">
                <input type="checkbox" className="formInput checkbox" />
                <label htmlFor="">Ship to a different Address</label>
              </div>
            </div>
            <div className="grid grid-12 grid-gap">
              <div className="w-100">
                <label htmlFor="">
                  Other notes <span className="mark">*</span>
                </label>
                <input type="text" className="w-100 formInput" />
              </div>
            </div>
          </div>
          <div className="orders">
            <div className="order">
              <h1>Your other</h1>
              <hr />
              <div className="grid grid-6 padding">
                <div className="ordertitle">Products</div>
                <div className="ordertitle">Total</div>
              </div>
              <div className="grid grid-6 padding">
                <div className="orderdesc">Vegetable’s Package</div>
                <div className="price porder">$75.99</div>
              </div>
              <div className="grid grid-6 padding">
                <div className="orderdesc">Vegetable’s Package</div>
                <div className="price porder">$75.99</div>
              </div>
              <div className="grid grid-6 padding">
                <div className="orderdesc">Vegetable’s Package</div>
                <div className="price porder">$75.99</div>
              </div>
              <hr />
              <div className="grid grid-6 padding">
                <div className="ordertitle">subtotal</div>
                <div className="ordertitle">$75.99</div>
              </div>
              <div className="grid grid-6 padding">
                <div className="ordertitle">total</div>
                <div className="ordertitle">$75.99</div>
              </div>

              <hr />
              <div className="grid grid-12 grid-gap">
                <div className="w-100">
                  <input type="checkbox" className="formInput checkbox" />
                  <label htmlFor="">create an Account</label>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adip elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                  </p>
                </div>
              </div>
              <div className="grid grid-12 grid-gap">
                <div className="w-100">
                  <input type="checkbox" className="formInput checkbox" />
                  <label htmlFor="">create an Account</label>
                </div>
              </div>
              <div className="grid grid-12 grid-gap">
                <div className="w-100">
                  <input type="checkbox" className="formInput checkbox" />
                  <label htmlFor="">create an Account</label>
                </div>
              </div>
              <div className="grid grid-12 grid-gap">
                <div className="w-100">
                  <button type="sumbit" className="w-100 place">
                    place order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
