import React, { useEffect } from "react";
import axios from "axios";

const TestConnection = () => {
  useEffect(() => {
    // Call backend test route
    axios.get("http://localhost:5000/test")
      .then(res => {
        console.log("Backend response:", res.data);
      })
      .catch(err => {
        console.error("Error connecting to backend:", err);
      });
  }, []);

  return <h2>Check console for backend connection</h2>;
};

export default TestConnection;
