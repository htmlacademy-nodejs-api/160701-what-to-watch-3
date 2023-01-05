export interface LoggerInterface {
  info(message: string, ...arg: unknown[]): void;
  warn(message: string, ...arg: unknown[]): void;
  error(message: string, ...arg: unknown[]): void;
  debug(message: string, ...arg: unknown[]): void;
}
