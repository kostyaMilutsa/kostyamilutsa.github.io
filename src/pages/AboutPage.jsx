import React from "react";
import { useUserContext } from "../components/UserProvider";

const AboutPage = () => {
  const { user } = useUserContext();
  return (
    <div>
      <h2 className="font-bold text-2xl">Hello, {user.email}</h2>
      <p>
        Дата стварэньня акаўнта: {new Date(user.createdAt).toDateString()}
      </p>
    </div>
  );
};

export default AboutPage;
