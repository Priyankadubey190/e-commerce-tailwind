import * as dotenv from "dotenv";
import express from "express";
import path from "path";
dotenv.config({ path: path.join(__dirname, "./.env") });
import userRoute from "./src/routes/user.route";
import { connectionDB } from "./src/utils/features";
const app = express();
app.use(express.json());

console.log("Loaded PORT:", process.env.PORT);

const port = process.env.PORT || 8080;

// connectionDB();
app.use("/api/user", userRoute);

app.listen(port, async () => {
  try {
    await connectionDB;
    console.log(`server is running on port ${port}`);
  } catch (e) {
    console.log(e);
  }
});
