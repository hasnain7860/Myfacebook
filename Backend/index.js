require('dotenv').config()

const express = require('express');
const app = express();
const cors = require('cors');
const connectDb = require('./Utils/Db.js')
const router = require("./Routes/Auth-routes.js");
const port = 3000;


const corsOptions = {
  origin: 'http://localhost:5173',
  methods: "GET, PUT, POST",
  credentials:true,
  optionsSuccessStatus: 201 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

app.use(express.json());

app.use("/auth",router)

connectDb().then(()=>{
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})})