// app.js

const express = require("express");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");
const { contactarray } = require("./Data");
const { name } = require("ejs");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", pageRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


app.post('/contact' , (req, res) => {
  const arraydata = req.body;
  contactarray.push(arraydata);
  console.log(JSON.stringify(contactarray, null, 2));
  res.redirect('/thankyou');
})





