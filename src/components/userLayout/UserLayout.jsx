import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/product/productSlice";
import { autoLoginAction } from "../../redux/user/UserAction";

const UserLayout = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //autologin
  useEffect(() => {
    dispatch(autoLoginAction());
  });
  // handle on search
  const handleOnSearch = (e) => {
    e.preventDefault();
    // Update the search query in  store/slice
    dispatch(setSearch(searchInput));
    // Redirect to SearchPage
    navigate(`/search?query=${searchInput}`);
  };

  return (
    <div className="vh-100 d-flex flex-column ">
      <Header
        handleOnSearch={handleOnSearch}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
