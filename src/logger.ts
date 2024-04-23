import winston from "winston";

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

const consoleLog = winston.createLogger({
  level: "info",
  format: alignedWithColorsAndTime,
  transports: [new winston.transports.Console()],
});

const logger = {
  console: consoleLog,
};

export { logger, consoleLog };
