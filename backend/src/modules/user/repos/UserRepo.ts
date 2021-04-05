import { getRepository, Repository } from 'typeorm'

import { User } from '../../../infra/repo/orm/typeorm/entities/User'
import { CreateUserDTO } from '../dtos/CreateUserDTO'

interface IUserRepo {
  save(user: CreateUserDTO): Promise<User>
  findByPhoneNumber(phoneNumber: string): Promise<User>
}

class UserRepo implements IUserRepo {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async save(data: CreateUserDTO): Promise<User> {
    const user = this.repository.create(data)
    return this.repository.save(user)
  }

  async findByPhoneNumber(phoneNumber: string): Promise<User> {
    return this.repository.findOne({ phoneNumber })
  }
}

export { IUserRepo, UserRepo }
