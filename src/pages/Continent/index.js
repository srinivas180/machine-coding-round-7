import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { data } from "../../db/data";
import "./index.css";

export function Continent() {
    const { continentId } = useParams();
    const [country, setCountry] = useState();
    const [destination, setDestination] = useState();

    const continent = data.continents.find(
        (continent) => continent.id === Number(continentId)
    );

    console.log(continent);

    return (
        <div className="container">
            <span>Top countries in {continent.name} for your next holiday</span>

            <div className="grid">
                {continent.countries.map((country) => (
                    <div className="continent" key={country.id}>
                        <button
                            style={{
                                backgroundColor: "white",
                                border: "none",
                                cursor: "pointer",
                            }}
                            onClick={() => setCountry(country)}
                        >
                            <img
                                className="continent__image"
                                src={country.image}
                            />
                            <span className="continent__name">
                                {country.name}
                            </span>
                        </button>
                    </div>
                ))}
            </div>

            {country !== null && country !== undefined ? (
                <div className="container">
                    <span>
                        Top countries in {continent.name} for your next holiday
                    </span>
                    <div className="grid">
                        {country.destinations.map((destination) => (
                            <div className="continent" key={destination.id}>
                                <button
                                    style={{
                                        backgroundColor: "white",
                                        border: "none",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => setDestination(destination)}
                                >
                                    <img
                                        className="continent__image"
                                        src={destination.image}
                                    />
                                    <span className="continent__name">
                                        {destination.name}
                                    </span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
