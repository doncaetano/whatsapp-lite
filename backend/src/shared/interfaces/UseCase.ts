export interface UseCase<IRequest, IResponse> {
  execute(request?: IRequest): Promise<IResponse> | IResponse
}

export class UseCaseError {
  public readonly message: string

  public readonly status: number

  constructor(message: string, status: number) {
    this.message = message
    this.status = status
  }
}
