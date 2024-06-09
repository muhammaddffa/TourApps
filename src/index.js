const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');

const userRoute = require("./routes/userRoute");
const registerRoute = require("./routes/registerRoute");
const loginUser = require('./routes/loginRoute');

const app = express();

dotenv.config();

app.use(cors());

const PORT = process.env.PORT;

app.use(express.json());

app.get("/", async (req, res) => {
  res.send({ message: "Awesome it works 🐻" });
});

app.use("/api/users", userRoute);
app.use("/auth/register", registerRoute);
app.use("/auth/login", loginUser);


app.listen(PORT, () => {
  console.log("Express Running in Port " + PORT);
});
