export interface ILoggerFunction {
  (_message?: any, ..._optionalParams: any[]): void;
}

export interface ILogger {
  log: ILoggerFunction;
  warn: ILoggerFunction;
  error: ILoggerFunction;

  colors: Record<ILogLevel, IColorLog>;
}

export interface IColorLog {
  background: string;
  font: string;
}

export interface ITransform {
  colors: {
    log: IColorLog;
    warn: IColorLog;
    error: IColorLog;
  };
}

export type ILogLevel = "log" | "warn" | "error";
