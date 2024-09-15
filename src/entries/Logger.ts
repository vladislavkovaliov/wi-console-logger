import { NO_OPTIONS } from "../constants";
import {
  IColorLog,
  ILogger,
  ILoggerFunction,
  ILogLevel,
  ITransform,
} from "../types";

export class Logger implements ILogger {
  readonly log: ILoggerFunction;
  readonly warn: ILoggerFunction;
  readonly error: ILoggerFunction;

  readonly colors: Record<ILogLevel, IColorLog>;

  constructor(options?: { level?: ILogLevel; transform?: ITransform }) {
    const { level } = options || {};
    const { transform } = options || {};

    if (transform !== undefined) {
      this.colors = transform.colors;
    } else {
      this.colors = {
        log: {
          background: "white",
          font: "black",
        },
        warn: {
          background: "orange",
          font: "black",
        },
        error: {
          background: "red",
          font: "white",
        },
      };
    }

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
    console.log(`%c LOG `, this.getConsoleColor("log"), message, ...params);
  };

  public readonly _warn: ILoggerFunction = (message, ...params) => {
    console.warn(`%c WARN `, this.getConsoleColor("warn"), message, ...params);
  };

  public readonly _error: ILoggerFunction = (message, ...params) => {
    console.warn(
      `%c ERROR `,
      this.getConsoleColor("error"),
      message,
      ...params,
    );
  };

  private getConsoleColor = (level: ILogLevel): string => {
    const { background, font } = this.colors[level];

    return `background: ${background}; color: ${font}`;
  };
}
