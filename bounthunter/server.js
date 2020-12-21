const express = require("express");
const morgan = require('morgan')
const app = express();
const PORT = process.env.PORT || 9000;

// Middleware (for every request)
app.use(express.json()) 
app.use(morgan ('dev'))

//Routes
app.use("/bounty", require("./routes/bountyRouter"));

// Port callback
app.listen(PORT, () =>{
    console.log(`Bounty Hunter Server is running and listeneing to port ${PORT}!!`) 
}); 