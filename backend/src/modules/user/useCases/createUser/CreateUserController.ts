import { Response, Request } from 'express'

import { UseCaseError } from '../../../../shared/interfaces/UseCase'
import { CreateUserDTO } from '../../dtos/CreateUserDTO'
import { UserRepo } from '../../repos/UserRepo'
import { CreateUserUseCase } from './CreateUserUseCase'

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { phoneNumber, name, about } = <CreateUserDTO>request.body

    const userRepo = new UserRepo()
    const createUserUseCase = new CreateUserUseCase(userRepo)
    const result = await createUserUseCase.execute({ phoneNumber, name, about })

    if (!result.isSuccess) {
      const error = <UseCaseError>result.getError()
      return response.status(error.status).send(error.message)
    }

    return response.status(201).json(result.getValue())
  }
}

export { CreateUserController }
