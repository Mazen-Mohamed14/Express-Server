import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone number: 01142280788</p>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About me</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
