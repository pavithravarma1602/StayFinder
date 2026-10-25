import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import PGCard from "../components/PGCard";
import api from "../services/api";

function Home() {
  const [featuredPGs, setFeaturedPGs] = useState([]);

  useEffect(() => {
    const fetchFeaturedPGs = async () => {
      try {
        const response = await api.get("/pgs?sort=rating&limit=3");
        setFeaturedPGs(response.data);
      } catch (error) {
        console.log("Backend not connected yet.");
      }
    };

    fetchFeaturedPGs();
  }, []);

  const handleSearch = (searchData) => {
    console.log("Search:", searchData);
  };

  const cities = ["Bangalore", "Hyderabad", "Chennai", "Pune", "Mumbai"];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Perfect Stay</h1>

          <p>
            Search for comfortable PGs and rooms that match your
            location, budget, and lifestyle.
          </p>

          <SearchBox onSearch={handleSearch} />
        </div>
      </section>

      {/* Popular Cities */}
      <section className="section">
        <div className="section-heading">
          <h2>Popular Cities</h2>
          <p>Find accommodation in popular cities</p>
        </div>

        <div className="city-grid">
          {cities.map((city) => (
            <Link
              to={`/find-pg?city=${city}`}
              className="city-card"
              key={city}
            >
              <h3>{city}</h3>
              <p>Explore PGs</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured PGs */}
      <section className="section">
        <div className="section-heading">
          <h2>Featured PGs</h2>
          <p>Explore some of our listed accommodations</p>
        </div>

        {featuredPGs.length > 0 ? (
          <div className="pg-grid">
            {featuredPGs.map((pg) => (
              <PGCard key={pg._id} pg={pg} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>Featured PGs will appear here once listings are added.</p>
          </div>
        )}
      </section>

      {/* Why StayFinder */}
      <section className="section why-section">
        <div className="section-heading">
          <h2>Why Choose StayFinder?</h2>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <h3>🔍 Easy Search</h3>
            <p>
              Quickly search for PGs based on location and budget.
            </p>
          </div>

          <div className="why-card">
            <h3>⚖️ Compare Options</h3>
            <p>
              Compare different PGs before making your decision.
            </p>
          </div>

          <div className="why-card">
            <h3>🏠 Verified Listings</h3>
            <p>
              Discover accommodation details in one convenient place.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="section-heading">
          <h2>How It Works</h2>
        </div>

        <div className="steps-grid">
          <div className="step">
            <span>1</span>
            <h3>Search</h3>
            <p>Enter your preferred location and budget.</p>
          </div>

          <div className="step">
            <span>2</span>
            <h3>Compare</h3>
            <p>Compare PGs based on price, facilities and rating.</p>
          </div>

          <div className="step">
            <span>3</span>
            <h3>Choose</h3>
            <p>Select the accommodation that suits you.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;