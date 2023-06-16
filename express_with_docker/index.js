const express = require("express");
const PORT = process.env.PORT || 5000;

const app = express();


app.get('/', (req, res)=>{
    return res.send("Welcome to express js in docker");
});

app.listen(PORT, ()=>console.log(`Server is running on Port ${PORT}`));