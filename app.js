require("dotenv").config();
require("express-async-errors");
require("./connect/connectDB");

const express = require("express");
const app = express();

const productRouter = require("./routes/product-route");
const notFoundMiddleware = require("./middleware/notFound-middleware");
const errorHandlerMiddleware = require("./middleware/errorHandler-middleware");

app.use(express.json());

app.use("/api/v3/product", productRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = 9090;

app.listen(PORT, () => console.log(`Server is listening on ${PORT}.....`));
