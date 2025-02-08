import React, { useContext } from "react";

const Header = ({ data }) => {
  let name = "";
  if (data) {
    name = data.firstName;
  } else {
    name = "Admin";
  }

  const logout = () => {
    localStorage.setItem("loggedInUser", JSON.stringify({ role: null }));

    window.location.reload();
  };
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl">
        Hello <br /> <span className="font-bold">{name} ✋</span>
      </h1>
      <button
        onClick={logout}
        className="flex w-[100px] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
