interface IUser {
  id?: string
  phoneNumber: string
  name: string
  about: string
  createdAt?: string
}

class User implements IUser {
  id?: string

  phoneNumber: string

  name: string

  about: string

  createdAt: string

  picture?: string
}

export { User, IUser }
