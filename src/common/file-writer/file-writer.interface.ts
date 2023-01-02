export interface FileWriterIntreface {
  readonly filename: string;
  write(row: string): void;
}
