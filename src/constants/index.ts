import { ILoggerFunction } from "../types";

export const NO_OPTIONS: ILoggerFunction = (
  _message?: any,
  ..._optionalParams: any[]
) => {};
