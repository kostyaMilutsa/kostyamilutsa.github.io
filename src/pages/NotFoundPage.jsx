import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="">
        <h2>Not found!</h2>
        <p>
          <Link to="/">Go to Main</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
