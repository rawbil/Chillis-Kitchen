const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;
const foodRoute = require('./Routes/foodRoute');
const userRoute = require('./Routes/userRoute');
const cartRoute = require("./Routes/cartRoute");
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODBURI)
.then(() => {
    console.log(`Database connected: ${mongoose.connection.host  }`)
})
.catch(error => console.log(error))

//END OF IMPORTS

const corsOptions = {
  origin: ["https://chilliskitchen-online.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "token"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true}))


//Routes
app.use("/api/food", foodRoute);
app.use("/api/user", userRoute);
app.use("/api/cart", cartRoute);

app.use("/images", express.static("uploads"));

//welcome page
app.get('/', (req, res) => {
  res.send("Welcome Home");
})

//ERROR PAGE
app.use((req, res) => {
    res.status(404).send("404 Error")
})

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
