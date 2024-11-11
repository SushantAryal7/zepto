import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Admin() {
  const [giveAccess, setGiveAccess] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("zepto_login"));
    if (local === "admin@gmail.com") {
      setGiveAccess(local);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (giveAccess === null) {
    return null;
  }
  return <Outlet />;
}

export default Admin;
