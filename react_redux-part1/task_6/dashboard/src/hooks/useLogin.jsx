import { useState } from "react";

function useLogin(onLogin) {
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  function validateForm(email, password) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && password.length >= 8;
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    const { email, password } = formData;
    onLogin({ email, password });
  }

  function handleEnableSubmit(email, password) {
    // Met à jour enableSubmit en fonction de la validation
    setEnableSubmit(validateForm(email, password));
  }

  function handleChangeEmail(e) {
    const email = e.target.value;
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, email };
      handleEnableSubmit(updatedFormData.email, updatedFormData.password);
      return updatedFormData;
    });
  }

  function handleChangePassword(e) {
    const password = e.target.value;
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, password };
      handleEnableSubmit(updatedFormData.email, updatedFormData.password);
      return updatedFormData;
    });
  }

  return {
    enableSubmit,
    formData,
    handleLoginSubmit,
    handleEnableSubmit,
    handleChangeEmail,
    handleChangePassword,
  };
}

export default useLogin;
