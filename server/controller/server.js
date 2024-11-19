const express = require('express');
const app = express();
const port = 5000;


app.listen(port, () => {
    console.log(`This app is listening at port ${port}`);
});
//even the order of res and req is key , getting the order wrong leads to error.
app.get("/new_api", (req,res) =>{
    res.json({ "users": ["userOne','userTwo','userThree"] });
});

