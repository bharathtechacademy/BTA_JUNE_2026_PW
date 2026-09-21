export enum LogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  DEBUG = 'DEBUG'
}

export class Logger {
  private static getTimestamp(): string {
    return new Date().toISOString();
  }

  static info(message: string, context?: string): void {
    this.log(LogLevel.INFO, message, context);
  }

  static warn(message: string, context?: string): void {
    this.log(LogLevel.WARN, message, context);
  }

  static error(message: string, context?: string): void {
    this.log(LogLevel.ERROR, message, context);
  }

  static debug(message: string, context?: string): void {
    this.log(LogLevel.DEBUG, message, context);
  }

  private static log(level: LogLevel, message: string, context?: string): void {
    const ctx = context ? ` [${context}]` : '';
    const formattedMsg = `[${this.getTimestamp()}] [${level}]${ctx}: ${message}`;
    
    switch (level) {
      case LogLevel.ERROR:
        console.error(`\x1b[31m${formattedMsg}\x1b[0m`); // Red
        break;
      case LogLevel.WARN:
        console.warn(`\x1b[33m${formattedMsg}\x1b[0m`);  // Yellow
        break;
      case LogLevel.DEBUG:
        console.log(`\x1b[36m${formattedMsg}\x1b[0m`);   // Cyan
        break;
      case LogLevel.INFO:
      default:
        console.log(`\x1b[32m${formattedMsg}\x1b[0m`);   // Green
        break;
    }
  }
}
