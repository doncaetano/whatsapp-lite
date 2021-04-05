import { Result } from '../../../../shared/interfaces/Result'
import { UseCaseError } from '../../../../shared/interfaces/UseCase'
import { User } from '../../entities/User'

export class ErrorAccountAlreadyExists extends Result<UseCaseError> {
  constructor(phoneNumber: string) {
    super(false, {
      message: `User with phone number ${phoneNumber} already exist.`,
      status: 403
    } as UseCaseError)
  }
}

export class Success extends Result<User> {
  constructor(user: User) {
    super(true, undefined, user)
  }
}
