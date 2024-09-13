import mongoose from "mongoose";

const mongoUrl = process.env.mongo_url;

console.log("mongoUrl", mongoUrl);

if (!mongoUrl) {
  throw new Error(
    "MongoDB connection URL is not defined in the environment variables."
  );
}

// export const connectionDB = () => {
//     mongoose
//       .connect(mongoUrl)
//       .then((c) => console.log(`DB Connected.host`))
//       .catch((e) => console.log(e));
//   };
export const connectionDB = mongoose.connect(mongoUrl);
