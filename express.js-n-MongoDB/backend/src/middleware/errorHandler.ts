const { logEvents } = require("./logEvents");

const errorHandler = (err: any, res: any) => {
  logEvents(`${err.name}: ${err.message}`, "errLog.txt");
  console.error(err.stack);
  res.status(500).send(err.message);
};

export default errorHandler;
