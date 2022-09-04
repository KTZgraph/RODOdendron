import express from "express";
import dotenv from "dotenv";
dotenv.config(); //bez tego nie umie dobrać się do zminnych środowiskowych z globalnego obiektu process.env

// express app
const app = express();

// global middleware
app.use((req, res, next) => {
  // ważny next() - bo inaczej nie uruchomi się kolejny middleware
  // ten middleware służy do logowanie danych w konsoli serwerra
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  // endpoint ścieżka do roota tj. https://moj-server:443/
  res.json({ message: "Welcome to the app" });
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
