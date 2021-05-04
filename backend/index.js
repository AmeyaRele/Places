const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Place = require("./placesSchema");
const app = express();
require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8yh0d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) throw err;
        console.log("Connection established");
    }
);

app.get("/api/allplaces", async (req, res) => {
    const allplaces = await Place.find({});
    return res.json(allplaces);
});
app.post("/api/add", async (req, res) => {
    try {
        console.log(req);
        const {
            name,
            latitude,
            longitude,
            city,
            country,
            photo,
            time,
        } = req.body;
        let timetoVisit = time;
        if (
            !name ||
            !latitude ||
            !longitude ||
            !city ||
            !country ||
            !photo ||
            !time
        ) {
            return res.status(400).json({ msg: "Not all fields are entered" });
        }
        const newplace = new Place({
            name,
            latitude,
            longitude,
            city,
            country,
            photo,
            timetoVisit,
        });
        const savedplace = await newplace.save();
        return res.json({ msg: "Added successfully" });
    } catch (err) {
        console.err(err);
    }
});
app.listen(5000, function () {
    console.log("listening on 5000");
});
