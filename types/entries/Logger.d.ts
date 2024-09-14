import { ILogger, ILoggerFunction, ILogLevel } from "../types";
export declare class Logger implements ILogger {
    readonly log: ILoggerFunction;
    readonly warn: ILoggerFunction;
    readonly error: ILoggerFunction;
    constructor(options?: {
        level?: ILogLevel;
    });
    readonly _log: ILoggerFunction;
    readonly _warn: ILoggerFunction;
    readonly _error: ILoggerFunction;
}
