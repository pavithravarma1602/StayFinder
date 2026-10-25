import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { useCompare } from "../context/CompareContext";

function PGCard({ pg }) {
  const { toggleCompare, isInCompare } = useCompare();

  return (
    <div className="pg-card">
      <img
        src={pg.image || "https://via.placeholder.com/400x250"}
        alt={pg.name}
        className="pg-card-image"
      />

      <div className="pg-card-content">
        <h3>{pg.name}</h3>

        <p className="pg-location">
          <FaMapMarkerAlt /> {pg.location || "Location not available"}
        </p>

        <div className="pg-rating">
          <FaStar /> {pg.rating || "New"}
        </div>

        <p className="pg-price">
          ₹{pg.price || "N/A"} <span>/ month</span>
        </p>

        <div className="pg-card-actions">
          <Link to={`/pg/${pg._id}`} className="btn-primary">
            View Details
          </Link>

          <button
            className="btn-secondary"
            onClick={() => toggleCompare(pg)}
          >
            {isInCompare(pg._id) ? "Remove Compare" : "Compare"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PGCard;