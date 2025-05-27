import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"


export default function CardMenu(
    { to, icon: Icon, title, description }
) {
  return (
    <Link to={to} className="card-link">
      <div className="card-icon">
        <Icon size={40} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </Link>
  );
}
