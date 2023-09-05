const errorHandlerMiddleware = (err, req, res, next) => {
  const customErrorMessage = {
    message: err.message || "Something went wrong try again later",
    statusCode: err.statusCode || 500,
  };

  res
    .status(customErrorMessage.statusCode)
    .json({ msg: customErrorMessage.message });
};

module.exports = errorHandlerMiddleware;
