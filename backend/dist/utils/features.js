"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoUrl = process.env.mongo_url;
if (!mongoUrl) {
    throw new Error("MongoDB connection URL is not defined in the environment variables.");
}
// export const connectionDB = () => {
//     mongoose
//       .connect(mongoUrl)
//       .then((c) => console.log(`DB Connected.host`))
//       .catch((e) => console.log(e));
//   };
exports.connectionDB = mongoose_1.default.connect(mongoUrl);
