import winston from "winston";
const { combine, timestamp, json } = winston.format;

const alignedWithColorsAndTime = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.printf((info) => {
    const { timestamp, level, message, ...args } = info;

    const ts = timestamp.slice(0, 19).replace("T", " ");
    return `${ts} [${level}]: \n${message} ${
      Object.keys(args).length
        ? "\nArgs:\n" + JSON.stringify(args, null, 2)
        : ""
    }`;
  })
);

const fileLogFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json(),
  winston.format.printf((info) => {
    const { timestamp, level, message, ...args } = info;

    const ts = timestamp.slice(0, 19).replace("T", " ");
    return `${ts} [${level}]: \n${message} ${
      Object.keys(args).length
        ? "\nArgs:\n" + JSON.stringify(args, null, 2)
        : ""
    }`;
  })
);

const fileLog = winston.createLogger({
  level: "info",
  format: fileLogFormat,
  transports: [
    new winston.transports.File({
      filename: "src/logger/app.log",
    }),
  ],
});

const consoleLog = winston.createLogger({
  level: "info",
  format: alignedWithColorsAndTime,
  transports: [new winston.transports.Console()],
});

const logger = {
  file: fileLog,
  console: consoleLog,
};

export { logger, consoleLog, fileLog };
