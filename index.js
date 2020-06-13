require("dotenv").config();

const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");

const app = express();
app.use(formidable());
app.use(cors());

const API_KEY = process.env.API_KEY;
const DOMAIN = process.env.DOMAIN;
const mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });

app.post("/formulaire", (req, res) => {
    const { firstname, lastname, email, subject, message } = req.fields;
    const data = {
        from: `${lastname}, ${firstname} <${email}>`,
        to: "eros.matip@gmail.com",
        subject: subject,
        text: message,
    };

    mailgun.messages().send(data, (error, body) => {
        if (!error) {
            return res.status(200).json(body);
        }
        return res.status(401).json(error);
    });
});

app.listen(3000, () => {
    console.log("Server started");
});