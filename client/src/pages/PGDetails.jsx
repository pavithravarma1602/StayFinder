
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PGDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const pg = state?.pg;

  if (!pg) {
    return (
      <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
        <h2>PG details not found</h2>
        <button onClick={() => navigate("/find-pg")}>
          Back to Find PG
        </button>
      </div>
    );
  }

  const image = "/pg-room.jpeg";

  const styles = {
    page: {
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "30px 20px",
      fontFamily: "Arial, sans-serif",
      color: "#292929",
    },
    back: {
      padding: "10px 18px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      background: "#fff",
      cursor: "pointer",
      marginBottom: "22px",
    },
    layout: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.5fr) minmax(260px, 1fr)",
      gap: "28px",
      alignItems: "start",
    },
    photo: {
      width: "100%",
      height: "390px",
      objectFit: "cover",
      borderRadius: "16px",
      background: "#f2f2f2",
    },
    card: {
      border: "1px solid #e7e7e7",
      borderRadius: "16px",
      padding: "24px",
      boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
    },
    price: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#24734b",
      margin: "12px 0",
    },
    detail: {
      padding: "12px 0",
      borderBottom: "1px solid #eee",
    },
    button: {
      width: "100%",
      padding: "13px",
      background: "#24734b",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      cursor: "pointer",
      marginTop: "18px",
    },
  };

  return (
    <main style={styles.page}>
      <button style={styles.back} onClick={() => navigate(-1)}>
        ← Back to PG listings
      </button>

      <h1>{pg.name || pg.title || "PG Accommodation"}</h1>
      <p>📍 {pg.location || pg.address || "Location not specified"}</p>

      <div style={styles.layout}>
        <section>
          <img
            src={image}
            alt="PG room accommodation"
            style={styles.photo}
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.style.display = "none";
            }}
          />

          <div style={{ marginTop: "26px" }}>
            <h2>About this PG</h2>
            <p>
              Explore this accommodation and check its facilities,
              room details, and monthly rent before making a decision.
            </p>

            <h3>Facilities</h3>
            <p>🛏️ Room accommodation</p>
            <p>🚿 Bathroom facilities</p>
            <p>📍 Convenient location</p>
          </div>
        </section>

        <aside style={styles.card}>
          <h2>Stay details</h2>

          <div style={styles.price}>
            ₹{Number(pg.price || pg.rent || 0).toLocaleString("en-IN")}
            <span style={{ fontSize: "14px", fontWeight: "normal" }}>
              {" "}/ month
            </span>
          </div>

          <div style={styles.detail}>
            <strong>Location</strong>
            <p>{pg.location || pg.address || "Not specified"}</p>
          </div>

          <div style={styles.detail}>
            <strong>Room type</strong>
            <p>{pg.roomType || pg.type || "Not specified"}</p>
          </div>

          <div style={styles.detail}>
            <strong>Availability</strong>
            <p>{pg.availability || "Contact the PG owner to confirm"}</p>
          </div>

          <button
            style={styles.button}
            onClick={() =>
              alert("Booking feature will be available soon!")
            }
          >
            Contact / Book PG
          </button>
        </aside>
      </div>
    </main>
  );
}
