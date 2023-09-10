
function HandleErrors(err, req, res, next) {
  console.error(`Error occured: ${err}`);

  res.status(500).json({
    errorStatus: true,
    statusCode: 500,
    code: "--api/server-error",
    message: "Something went wrong",
    details: {
      stacks: process.env.NODE_ENV !== "production" && err?.stack,
    },
  });
}

module.exports = HandleErrors;
