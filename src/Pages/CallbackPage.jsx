import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CallbackPage = () => {
  const id = sessionStorage.getItem("id");
  const server = sessionStorage.getItem("server");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      const res = await fetch(`https://${server}/api/miauth/${id}/check`, {
        method: "POST",
      });

      const jsonData = await res.json();
      sessionStorage.setItem("token", jsonData.token);
      sessionStorage.setItem("user", JSON.stringify(jsonData.user));
      navigate("/");
    };

    fetchToken();
  }, []);

  return <div />;
};

export default CallbackPage;
