import express from "express";
import userRoute from "./routes/user.route.js";
import path from "path";
import dotenv from "dotenv";
import { connectionDB } from "./utils/features.js";
const app = express();
app.use(express.json());

dotenv.config({ path: "./.env" });
// Construct the absolute path to your .env file
// dotenv.config({ path: path.resolve(__dirname, "./.env") });

console.log("Loaded PORT:", process.env.PORT);

const port = process.env.PORT || 8080;

// connectionDB();
app.use("/api/user", userRoute);

app.listen(port, async () => {
  try {
    // await connectionDB;
    console.log(`server is running on port ${port}`);
  } catch (e) {
    console.log(e);
  }
});
