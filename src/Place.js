import { useEffect, useState } from "react";
export default function Place() {
    const [places, setplaces] = useState([]);
    useEffect(() => {
        fetch("/api/allplaces", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => {
                console.log(response.status);
                if (response.status >= 200 && response.status <= 299) {
                    return response.json();
                } else {
                    throw Error(response.statusText);
                }
            })
            .then((jsonResponse) => {
                console.log(jsonResponse);
                setplaces(jsonResponse);
            })
            .catch((error) => {
                let msg = document.getElementById("places");
                msg.innerHTML = "Error retrieving data";
            });
    }, []);

    return (
        <div id="places">
            {places.map((place) => (
                <div className="card">
                    <img
                        src={place.photo}
                        alt="place"
                        style={{ width: "100%" }}
                    ></img>
                    <div className="container">
                        <h4>
                            <b>{place.name}</b>
                        </h4>
                        <p>
                            Latitude:{place.latitude} Longitude:
                            {place.longitude}
                        </p>
                        <p>
                            Country:{place.country} City:{place.city}
                        </p>
                        <p>Time to visit:{place.timetoVisit}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
