import React from "react";
import "../styles/Loading.css";

const Loading = () => {
  return (
    <div className="loadingContainer">
      <div className="circles">
        <div class="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
