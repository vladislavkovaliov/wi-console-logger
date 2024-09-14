import { NO_OPTIONS } from "../constants";
import { ILogger, ILoggerFunction, ILogLevel } from "../types";

export class Logger implements ILogger {
  readonly log: ILoggerFunction;
  readonly warn: ILoggerFunction;
  readonly error: ILoggerFunction;

  constructor(options?: { level?: ILogLevel }) {
    const { level } = options || {};

    this.error = this._error;

    if (level === "error") {
      this.warn = NO_OPTIONS;
      this.log = NO_OPTIONS;

      return;
    }

    this.warn = this._warn;

    if (level === "warn") {
      this.log = NO_OPTIONS;

      return;
    }

    this.log = this._log;
  }

  public readonly _log: ILoggerFunction = (message, ...params) => {
    console.log(
      `%c LOG `,
      "background: white; color: black;",
      message,
      "",
      ...params,
    );
  };

  public readonly _warn: ILoggerFunction = (message, ...params) => {
    console.warn(
      `%c WARN `,
      "background: orange; color: black;",
      message,
      "",
      ...params,
    );
  };

  public readonly _error: ILoggerFunction = (message, ...params) => {
    console.warn(
      `%c ERROR `,
      "background: red; color: white;",
      message,
      "",
      ...params,
    );
  };
}
