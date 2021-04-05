import { Connection, createConnection, getConnectionOptions } from 'typeorm'

interface IConnectionOptions {
  type: string
  host: string
  port: string
  database: string
  username: string
  password: string
}

class TypeOrm {
  private connection: Promise<Connection>

  constructor(connectionOptions?: IConnectionOptions) {
    try {
      this.startConnection(connectionOptions)
    } catch (error) {
      console.log(error)
      throw new Error('[APP]: Database connection failed.')
    }
  }

  private async startConnection(connectionOptions?: IConnectionOptions): Promise<Connection> {
    if (!this.connection) {
      const isDevelopment = !connectionOptions
      this.connection = await isDevelopment
        ? this.getDevelopmentConnection()
        : this.getEnvironmentConnection(connectionOptions)
      console.log('[APP]: Database connection is done.')
    }
    return this.connection
  }

  private async getDevelopmentConnection(): Promise<Connection> {
    const options = await getConnectionOptions()
    Object.assign(options, { synchronize: true })
    return createConnection()
  }

  private async getEnvironmentConnection(connectionOptions: IConnectionOptions): Promise<Connection> {
    const {
      type, host, port, database, username, password
    } = connectionOptions
    const intPort = parseInt(port, 10)

    if ((type === 'postgres' || type === 'mysql' || type === 'sqlite') && intPort) {
      const options = await getConnectionOptions()
      Object.assign(options, {
        type,
        host,
        port: intPort,
        database,
        username,
        password
      })
      return createConnection(options)
    }
    throw new Error('[APP]: Invalid database settings.')
  }
}

export { TypeOrm }
