const notFoundMiddleware = (req, res) => {
  res.status(404).json({ msg: "Route cannot be found" });
};

module.exports = notFoundMiddleware;
