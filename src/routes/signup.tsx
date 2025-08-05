import React, { useState } from "react";
import InputField from "../components/InputField";
import Toast from "../components/Toast";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email non valide.";
      valid = false;
    }

    if (formData.password.length <= 6) {
      newErrors.password = "Le mot de passe doit contenir plus de 6 caractères.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setTimeout(() => {
        setShowToast(true);
      }, 1000);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl mb-6 text-center">{"S'inscrire"}</h2>
          <InputField
            label="Nom"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            label="Mot de passe"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <Toast
        message="Votre enregistrement à été bien éffectué!"
        show={showToast}
        onDismiss={() => setShowToast(false)}
      />
    </div>
  );
};

export default Signup;
