import React from "react";
import svg404 from "public/404.svg"; // Altere para o caminho correto da imagem 404

const NotFound: React.FC = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <img src={svg404} alt="404" className="notfound-image-404" />
        <h1 className="notfound-title">Oops! Page Not Found</h1>
        <p className="notfound-description">
          We’re sorry, the page you’re looking for cannot be found.
        </p>
        <a href="/" className="notfound-back-button">
          Go Back to Home
        </a>
      </div>
      <div className="notfound-decorations">
        <div className="notfound-ellipse notfound-ellipse-1"></div>
        <div className="notfound-ellipse notfound-ellipse-2"></div>
      </div>
    </div>
  );
};

export default NotFound;
