import React from "react";
import { useUserContext } from "../components/UserProvider";

const AboutPage = () => {
  const { user } = useUserContext();
  return (
    <div>
      <h2 className="font-bold text-2xl">Hello, {user.email}</h2>
      <p>
        Account creation date: {new Date(user.createdAt).toDateString()}
      </p>
    </div>
  );
};

export default AboutPage;
