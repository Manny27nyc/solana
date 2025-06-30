// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
export class SendTransactionError extends Error {
  logs: string[] | undefined;

  constructor(message: string, logs?: string[]) {
    super(message);

    this.logs = logs;
  }
}
