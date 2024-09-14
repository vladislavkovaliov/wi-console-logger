export interface ILoggerFunction {
  (_message?: any, ..._optionalParams: any[]): void;
}

export interface ILogger {
  log: ILoggerFunction;
  warn: ILoggerFunction;
  error: ILoggerFunction;
}

export type ILogLevel = "log" | "warn" | "error";
