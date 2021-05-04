import React from "react";
import { useState } from "react";
function Form(props) {
    const initialFormData = Object.freeze({
        name: "",
        latitude: 0,
        longitude: 0,
        city: "",
        country: "",
        photo: "",
        time: "",
    });
    let [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,

            // Trimming any whitespace
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        let form = JSON.stringify(formData);
        e.preventDefault();
        fetch("/api/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: form,
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
                let msg = document.getElementById("err");
                msg.style.color = "green";
                msg.innerHTML = "Added successfully";
            })
            .catch((error) => {
                let msg = document.getElementById("err");
                msg.innerHTML = "Not all fields are entered";
            });
    };

    return (
        <form
            style={{ display: "flex", flexDirection: "column", width: "30%" }}
        >
            <label>Name</label>
            <input name="name" id="name" type="text" onChange={handleChange} />
            <label>Latitude</label>
            <input
                name="latitude"
                id="lat"
                type="text"
                onChange={handleChange}
            />
            <label>Longitude</label>
            <input
                name="longitude"
                id="long"
                type="text"
                onChange={handleChange}
            />
            <label>City</label>
            <input name="city" id="city" type="text" onChange={handleChange} />
            <label>Country</label>
            <input
                name="country"
                id="country"
                type="text"
                onChange={handleChange}
            />
            <label>Photo(link)</label>
            <input
                name="photo"
                id="photo"
                type="text"
                onChange={handleChange}
            />
            <label>Time to visit</label>
            <input name="time" id="time" type="text" onChange={handleChange} />
            <label id="err" style={{ color: "red" }}></label>
            <input type="button" value="Submit" onClick={handleSubmit} />
        </form>
    );
}
export default Form;
