import React, { useState } from "react";
import "./HeroSection.css";
import Records from "../records.json";
import Card from "react-bootstrap/Card";

function HeroSection() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="Header">
      <a href="/" className="logolink">
        <h1 className="logo">Search</h1>
      </a>
      <hr className="hrlogo" />
      <input
        type="text"
        placeholder="Food Name"
        className="input"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <br />

      <div className="inner">
        <span className="foods">Foods</span>
        <br />
        {Records &&
          Records.filter( (record) => {
            if (searchTerm === "") {
              return record;
            } else if (
              record.Ingredient.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return record;
            }
          }).map((record) => {
            return (
              <div className="card1" key={record.id}>
                
                <Card   style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={record.imageUrl} />
                  <Card.Body>
                    <Card.Title className="ingredient">{record.Ingredient}</Card.Title>
                    <Card.Text className="shorttext">{record.Shorttext}</Card.Text>
                  </Card.Body>
                </Card>
                
              </div>
              
            );
          })}
      </div>
    </div>
  );
}

export default HeroSection;
