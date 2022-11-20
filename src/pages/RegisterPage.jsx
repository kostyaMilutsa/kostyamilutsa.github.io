import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { registerUser } from "../api/user";
import { useUserContext } from "../components/UserProvider";

const RegisterPage = () => {
  const { setNewUser, user } = useUserContext()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRepeatPasswordChange = (e) => setRepeatPassword(e.target.value);
  const handleRegister = () => {
    if (password !== repeatPassword) return;
    registerUser(email, password).then((user) => setNewUser(user.email, user.password))
  };
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="py-4">
      <h2 className="text-2xl text-center">Старонка рэгістрацыі:</h2>
      <div className="max-w-xs mx-auto flex flex-col gap-2">
        <input
          type="email"
          className="border border-gray-300 py-1 px-2 rounded-md"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <input
          type="password"
          className="border border-gray-300 py-1 px-2 rounded-md"
          value={password}
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <input
          type="password"
          className="border border-gray-300 py-1 px-2 rounded-md"
          value={repeatPassword}
          placeholder="Repeat password"
          onChange={handleRepeatPasswordChange}
        />
        <button
          className="bg-slate-400 py-1 px-2 rounded-md text-white"
          onClick={handleRegister}
        >
          Зарэгістравацца
        </button>
        <p className="text-center">
          Ужо маеце акаўнт? <Link to="/login">Увайсьці</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
