import { Link } from "react-router-dom";
import { data } from "../../db/data";
import "./index.css";

export function Home() {
    return (
        <div className="container">
            <h1>Welcome to Trip Advisor</h1>
            <span>Top Continents for your next holiday</span>
            <div className="grid">
                {data.continents.map((continent) => (
                    <div className="continent" key={continent.id}>
                        <Link to={`/continent/${continent.id}`}>
                            <img
                                className="continent__image"
                                src={continent.image}
                            />
                            <span className="continent__name">
                                {continent.name}
                            </span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
