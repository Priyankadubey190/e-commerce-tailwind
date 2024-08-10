"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_js_1 = __importDefault(require("./routes/user.route.js"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
dotenv_1.default.config({ path: "./.env" });
// Construct the absolute path to your .env file
// dotenv.config({ path: path.resolve(__dirname, "./.env") });
console.log("Loaded PORT:", process.env.PORT);
const port = process.env.PORT || 8080;
// connectionDB();
app.use("/api/user", user_route_js_1.default);
app.listen(port, async () => {
    try {
        // await connectionDB;
        console.log(`server is running on port ${port}`);
    }
    catch (e) {
        console.log(e);
    }
});
