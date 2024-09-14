import { NO_OPTIONS } from "../constants";
import { ILogger, ILoggerFunction, ILogLevel } from "../types";

export class Logger implements ILogger {
  readonly log: ILoggerFunction;
  readonly warn: ILoggerFunction;
  readonly error: ILoggerFunction;

  constructor(options?: { level?: ILogLevel }) {
    const { level } = options || {};

    this.error = console.error.bind(console);

    if (level === "error") {
      this.warn = NO_OPTIONS;
      this.log = NO_OPTIONS;

      return;
    }

    this.warn = console.warn.bind(console);

    if (level === "warn") {
      this.log = NO_OPTIONS;

      return;
    }

    this.log = console.log.bind(console);
  }
}
