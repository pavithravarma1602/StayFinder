import React from "react";
import { useCompare } from "../context/CompareContext";
import { Link } from "react-router-dom";

function Compare() {
  const { compareList, clearCompare } = useCompare();

  return (
    <div className="section">
      <div className="section-heading">
        <h2>Compare PGs</h2>
        <p>Compare your selected accommodations side by side.</p>
      </div>

      {compareList.length === 0 ? (
        <div className="empty-state">
          <h3>No PGs selected for comparison</h3>
          <p>
            Go to Find PG and select accommodations that you want
            to compare.
          </p>

          <br />

          <Link to="/find-pg" className="btn-primary">
            Find PGs
          </Link>
        </div>
      ) : (
        <>
          <div className="pg-grid">
            {compareList.map((pg) => (
              <div className="pg-card" key={pg._id}>
                <img
                  src={
                    pg.image ||
                    "https://via.placeholder.com/400x250"
                  }
                  alt={pg.name}
                  className="pg-card-image"
                />

                <div className="pg-card-content">
                  <h3>{pg.name}</h3>

                  <p>
                    <strong>Location:</strong>{" "}
                    {pg.location || "N/A"}
                  </p>

                  <p>
                    <strong>Price:</strong> ₹
                    {pg.price || "N/A"} / month
                  </p>

                  <p>
                    <strong>Rating:</strong>{" "}
                    {pg.rating || "N/A"}
                  </p>

                  <br />

                  <Link
                    to={`/pg/${pg._id}`}
                    className="btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <button
              className="btn-secondary"
              onClick={clearCompare}
            >
              Clear Comparison
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Compare;