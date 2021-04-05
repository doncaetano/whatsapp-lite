import { UseCase } from '../../../../shared/interfaces/UseCase'
import { CreateUserDTO } from '../../dtos/CreateUserDTO'
import { IUserRepo } from '../../repos/UserRepo'
import { Success, ErrorAccountAlreadyExists } from './CreateUserResults'

type Result = ErrorAccountAlreadyExists |
  Success

class CreateUserUseCase implements UseCase<CreateUserDTO, Promise<Result>> {
  constructor(private repo: IUserRepo) { }

  async execute(createUserDTO: CreateUserDTO): Promise<Result> {
    const hasUserWithPhoneNumber = await this.repo.findByPhoneNumber(createUserDTO.phoneNumber)
    if (hasUserWithPhoneNumber) {
      return new ErrorAccountAlreadyExists(createUserDTO.phoneNumber)
    }
    const user = await this.repo.save(createUserDTO)
    return new Success(user)
  }
}

export { CreateUserUseCase }
