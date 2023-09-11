require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const cors = require("cors");

const connectDB = require("./connect/connectDB");

const productRouter = require("./routes/product-route");
const notFoundMiddleware = require("./middleware/notFound-middleware");
const errorHandlerMiddleware = require("./middleware/errorHandler-middleware");

app.use(express.json());
app.use(cors());

app.use("/api/v3/product", productRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = 9090;

const start = async () => {
  try {
    await connectDB(process.env.URI);
    app.listen(PORT, () => console.log(`Server is listening on ${PORT}.....`));
  } catch (error) {
    console.log(error);
  }
};

start();
