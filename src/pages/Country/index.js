// import { useParams } from "react-router";
// import { Link } from "react-router-dom";

// import { data } from "../../db/data";
// import "./index.css";

// export function Country() {
//     const { countryId } = useParams();

//     const continent = data.continents.find(
//         (continent) => continent.id === Number(continentId)
//     );

//     console.log(continent);

//     return (
//         <div className="container">
//             <span>Top countries in {continent.name} for your next holiday</span>

//             <div className="grid">
//                 {continent.countries.map((country) => (
//                     <div className="continent" key={country.id}>
//                         <Link to={`/country/${country.id}`}>
//                             <img
//                                 className="continent__image"
//                                 src={country.image}
//                             />
//                             <span className="continent__name">
//                                 {country.name}
//                             </span>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
