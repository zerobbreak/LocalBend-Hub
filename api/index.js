const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8080
const cors = require("cors");

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://zer:unathi@cluster0.18zdpwh.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connect to Mongodb");
}).catch((err) => {
    console.log("error connecting to Mongodb", err)
});

app.listen(port, () => {
    console.log("Server is runninig in port 8080")
})

const User = require("./model/user");
const Business = require("./model/business");
const Events = require("./model/event");
const Review = require("./model/review");
const catgory = require("./model/category");

//endpoint to register a user in the backend
app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        //create a new user
        const newUser = new User({ name, email, password });

        //generate and store the verification token
        newUser.verificationToken = crypto.randomBytes(20).toString("hex");

        //save the  user to the database
        await newUser.save();

        //send the verification email to the user
        sendVerificationEmail(newUser.email, newUser.verificationToken);

        res.status(200).json({ message: "Registration successful" });
    } catch (error) {
        console.log("error registering user", error);
        res.status(500).json({ message: "error registering user" });
    }
});

const sendVerificationEmail = async (email, verificationToken) => {
    //create a nodemailer transporter

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "utshuma6@gmail.com",
            pass: "juzx uwez xcoc vcea",
        },
    });

    //compose the email message
    const mailOptions = {
        from: "threads.com",
        to: email,
        subject: "Email Verification",
        text: `please click the following link to verify your email http://localhost:8080/verify/${verificationToken}`,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log("error sending email", error);
    }
};

app.get("/verify/:token", async (req, res) => {
    try {
        const token = req.params.token;

        const user = await User.findOne({ verificationToken: token });
        if (!user) {
            return res.status(404).json({ message: "Invalid token" });
        }

        user.verified = true;
        user.verificationToken = undefined;
        await user.save();

        res.status(200).json({ message: "Email verified successfully" });
    } catch (error) {
        console.log("error getting token", error);
        res.status(500).json({ message: "Email verification failed" });
    }
});

const generateSecretKey = () => {
    const secretKey = crypto.randomBytes(32).toString("hex");
    return secretKey;
};

const secretKey = generateSecretKey();

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "Invalid email" });
        }

        if (user.password !== password) {
            return res.status(404).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ userId: user._id }, secretKey);

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: "Login failed" });
    }
});

// Endpoint to access all the users except the logged-in user
app.get("/user/:userId", (req, res) => {
    try {
        const loggedInUserId = req.params.userId;

        User.find({ _id: { $ne: mongoose.Types.ObjectId(loggedInUserId) } })
            .then((users) => {
                res.status(200).json(users);
            })
            .catch((error) => {
                console.log("Error: ", error);
                res.status(500).json("error");
            });
    } catch (error) {
        res.status(500).json({ message: "Error getting the users" });
    }
});