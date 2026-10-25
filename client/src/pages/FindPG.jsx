
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaWifi,
  FaUtensils,
  FaShower,
  FaSearch,
  FaBed,
  FaStar,
} from "react-icons/fa";

const samplePGs = [
  {
    id: "demo-1",
    title: "DSU Student Stay",
    location: "Harohalli",
    address: "Near DSU, Harohalli, Bengaluru",
    city: "Bengaluru",
    rent: 7500,
    roomType: "Double",
    gender: "Unisex",
    rating: 4.5,
    facilities: ["Wi-Fi", "Food", "Laundry"],
    image: "/pg1.jpeg",
  },
  {
    id: "demo-2",
    title: "Harohalli Comfort PG",
    location: "Harohalli",
    address: "Harohalli Main Road, Bengaluru",
    city: "Bengaluru",
    rent: 8500,
    roomType: "Single",
    gender: "Female",
    rating: 4.6,
    facilities: ["Wi-Fi", "Laundry", "Parking"],
    image: "/pg-room.jpeg",
  },
  {
    id: "demo-3",
    title: "Green Nest PG",
    location: "Harohalli",
    address: "College Road, Harohalli, Bengaluru",
    city: "Bengaluru",
    rent: 6500,
    roomType: "Triple",
    gender: "Unisex",
    rating: 4.2,
    facilities: ["Food", "Wi-Fi", "Laundry"],
    image: "/pg3.jpeg",
  },
  {
    id: "demo-4",
    title: "Campus View PG",
    location: "Harohalli",
    address: "Harohalli Campus Area, Bengaluru",
    city: "Bengaluru",
    rent: 9000,
    roomType: "Double",
    gender: "Male",
    rating: 4.7,
    facilities: ["Food", "Wi-Fi", "Parking"],
    image: "/pg4.jpeg",
  },
  {
    id: "demo-5",
    title: "City Comfort Stay",
    location: "Madhapur",
    address: "Madhapur, Hyderabad",
    city: "Hyderabad",
    rent: 8000,
    roomType: "Double",
    gender: "Unisex",
    rating: 4.3,
    facilities: ["Wi-Fi", "Food", "Laundry"],
    image: "/pg-room.jpeg",
  },
  {
    id: "demo-6",
    title: "Metro Girls PG",
    location: "Kukatpally",
    address: "Kukatpally, Hyderabad",
    city: "Hyderabad",
    rent: 9500,
    roomType: "Single",
    gender: "Female",
    rating: 4.6,
    facilities: ["Wi-Fi", "Food", "Parking"],
    image: "/pg1.jpeg",
  },
  {
    id: "demo-7",
    title: "Chennai Student Home",
    location: "Velachery",
    address: "Velachery, Chennai",
    city: "Chennai",
    rent: 7000,
    roomType: "Triple",
    gender: "Unisex",
    rating: 4.2,
    facilities: ["Wi-Fi", "Food", "Laundry"],
    image: "/pg3.jpeg",
  },
  {
    id: "demo-8",
    title: "Marina Comfort PG",
    location: "Tambaram",
    address: "Tambaram, Chennai",
    city: "Chennai",
    rent: 8500,
    roomType: "Double",
    gender: "Male",
    rating: 4.4,
    facilities: ["Wi-Fi", "Laundry", "Parking"],
    image: "/pg4.jpeg",
  },
];

export default function FindPG() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [maxRent, setMaxRent] = useState("15000");
  const [roomType, setRoomType] = useState("All");
  const [gender, setGender] = useState("All");

  const filteredPGs = useMemo(() => {
    return samplePGs.filter((pg) => {
      const searchText =
        `${pg.title} ${pg.location} ${pg.address} ${pg.city}`.toLowerCase();

      const matchesSearch = searchText.includes(
        search.trim().toLowerCase()
      );

      const matchesCity = city === "All" || pg.city === city;
      const matchesRent = pg.rent <= Number(maxRent);
      const matchesRoom =
        roomType === "All" || pg.roomType === roomType;

      const matchesGender =
        gender === "All" ||
        pg.gender === gender ||
        pg.gender === "Unisex";

      return (
        matchesCity &&
        matchesSearch &&
        matchesRent &&
        matchesRoom &&
        matchesGender
      );
    });
  }, [search, city, maxRent, roomType, gender]);

  return (
    <div className="findpg-page">
      <style>{`
        .findpg-page {
          min-height: 100vh;
          background: #f7f8fc;
          color: #20243a;
          padding: 36px 6%;
          font-family: Arial, sans-serif;
          box-sizing: border-box;
        }

        .findpg-hero {
          background: linear-gradient(120deg, #35215e, #7652a7);
          color: white;
          padding: 38px;
          border-radius: 20px;
          margin-bottom: 30px;
        }

        .findpg-hero h1 {
          margin: 0 0 12px;
          font-size: 32px;
        }

        .findpg-hero p {
          margin: 0;
          line-height: 1.6;
          color: #eee7ff;
        }

        .findpg-search {
          display: flex;
          align-items: center;
          gap: 12px;
          background: white;
          border-radius: 12px;
          padding: 12px 16px;
          margin-top: 24px;
          color: #777;
        }

        .findpg-search input {
          width: 100%;
          border: none;
          outline: none;
          font-size: 15px;
          padding: 5px;
        }

        .findpg-layout {
          display: grid;
          grid-template-columns: 230px minmax(0, 1fr);
          gap: 26px;
          align-items: start;
        }

        .findpg-filters {
          background: white;
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 5px 20px #22222208;
        }

        .findpg-filters h3 {
          margin-top: 0;
        }

        .findpg-filters label {
          display: block;
          margin: 18px 0 8px;
          font-size: 14px;
          font-weight: 600;
        }

        .findpg-filters select {
          box-sizing: border-box;
          width: 100%;
          padding: 11px;
          border: 1px solid #dddce7;
          border-radius: 9px;
          background: white;
        }

        .findpg-results-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 18px;
        }

        .findpg-results-heading h2 {
          margin: 0 0 7px;
        }

        .findpg-results-heading p {
          margin: 0;
          color: #777;
          font-size: 14px;
        }

        .findpg-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .findpg-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 5px 20px #2222220c;
          transition: transform .2s, box-shadow .2s;
        }

        .findpg-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px #22222214;
        }

        .findpg-card img {
          width: 100%;
          height: 210px;
          object-fit: cover;
          display: block;
          background: #e9e4f2;
        }

        .findpg-card-body {
          padding: 18px;
        }

        .findpg-card-top {
          display: flex;
          justify-content: space-between;
          align-items: start;
          gap: 8px;
        }

        .findpg-card h3 {
          margin: 0 0 9px;
          font-size: 18px;
        }

        .findpg-location {
          color: #777;
          font-size: 13px;
          margin-bottom: 14px;
        }

        .findpg-rating {
          color: #d99417;
          white-space: nowrap;
          font-size: 13px;
        }

        .findpg-tag {
          display: inline-block;
          background: #f0eafa;
          color: #654296;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 12px;
          margin: 0 5px 8px 0;
        }

        .findpg-facilities {
          display: flex;
          gap: 13px;
          flex-wrap: wrap;
          color: #666;
          font-size: 12px;
          margin: 10px 0 18px;
        }

        .findpg-price {
          font-size: 22px;
          font-weight: 700;
          color: #39245f;
        }

        .findpg-price small {
          font-size: 12px;
          font-weight: 400;
          color: #777;
        }

        .findpg-details {
          display: block;
          text-align: center;
          background: #6843a0;
          color: white;
          text-decoration: none;
          padding: 12px;
          border-radius: 9px;
          margin-top: 14px;
          font-weight: 600;
        }

        .findpg-details:hover {
          background: #4e307e;
        }

        .findpg-empty {
          background: white;
          padding: 40px 20px;
          border-radius: 14px;
          text-align: center;
          color: #777;
        }

        @media (max-width: 800px) {
          .findpg-layout {
            grid-template-columns: 1fr;
          }

          .findpg-grid {
            grid-template-columns: 1fr;
          }

          .findpg-hero {
            padding: 26px 20px;
          }

          .findpg-hero h1 {
            font-size: 26px;
          }
        }
      `}</style>

      <section className="findpg-hero">
        <h1>Find Your Perfect Stay 🏡</h1>
        <p>
          Explore PG accommodations near your college or workplace.
          Compare rooms, facilities and monthly rent.
        </p>

        <div className="findpg-search">
          <FaSearch />
          <input
            type="text"
            placeholder="Search by PG name, city or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      <div className="findpg-layout">
        <aside className="findpg-filters">
          <h3>Filter PGs</h3>

          <label htmlFor="city">City</label>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="All">All cities</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
          </select>

          <label htmlFor="maxRent">Maximum monthly rent</label>
          <select
            id="maxRent"
            value={maxRent}
            onChange={(e) => setMaxRent(e.target.value)}
          >
            <option value="7000">Up to ₹7,000</option>
            <option value="8000">Up to ₹8,000</option>
            <option value="10000">Up to ₹10,000</option>
            <option value="15000">Up to ₹15,000</option>
            <option value="50000">Any budget</option>
          </select>

          <label htmlFor="roomType">Room type</label>
          <select
            id="roomType"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="All">All room types</option>
            <option value="Single">Single sharing</option>
            <option value="Double">Double sharing</option>
            <option value="Triple">Triple sharing</option>
          </select>

          <label htmlFor="gender">Accommodation</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="All">All accommodations</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </aside>

        <main>
          <div className="findpg-results-heading">
            <div>
              <h2>
                {city === "All" ? "PGs in All Cities" : `PGs in ${city}`}
              </h2>
              <p>
                {filteredPGs.length} demo listing
                {filteredPGs.length !== 1 ? "s" : ""} found
              </p>
            </div>
          </div>

          {filteredPGs.length === 0 ? (
            <div className="findpg-empty">
              <h3>No PGs match your filters</h3>
              <p>
                Try selecting another city, increasing your budget,
                or changing your search.
              </p>
            </div>
          ) : (
            <div className="findpg-grid">
              {filteredPGs.map((pg) => (
                <article className="findpg-card" key={pg.id}>
                  <img
                    src={pg.image}
                    alt={`Room photo for ${pg.title}`}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.alt = `Photo unavailable for ${pg.title}`;
                    }}
                  />

                  <div className="findpg-card-body">
                    <div className="findpg-card-top">
                      <h3>{pg.title}</h3>
                      <span className="findpg-rating">
                        <FaStar /> {pg.rating}
                      </span>
                    </div>

                    <div className="findpg-location">
                      <FaMapMarkerAlt /> {pg.address}
                    </div>

                    <span className="findpg-tag">
                      <FaBed /> {pg.roomType} sharing
                    </span>

                    <span className="findpg-tag">{pg.gender}</span>

                    <div className="findpg-facilities">
                      {pg.facilities.includes("Wi-Fi") && (
                        <span><FaWifi /> Wi-Fi</span>
                      )}

                      {pg.facilities.includes("Food") && (
                        <span><FaUtensils /> Food</span>
                      )}

                      {pg.facilities.includes("Laundry") && (
                        <span><FaShower /> Laundry</span>
                      )}

                      {pg.facilities.includes("Parking") && (
                        <span>Parking</span>
                      )}
                    </div>

                    <div className="findpg-price">
                      ₹{pg.rent.toLocaleString("en-IN")}
                      <small> / month</small>
                    </div>

                    <Link
                      className="findpg-details"
                      to={`/pg/${pg.id}`}
                      state={{ pg }}
                    >
                      View Details
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          <p
            style={{
              marginTop: 22,
              color: "#888",
              fontSize: 12,
            }}
          >
            Prototype only: sample listings, prices, ratings and images
            are illustrative and have not been verified.
          </p>
        </main>
      </div>
    </div>
  );
}
