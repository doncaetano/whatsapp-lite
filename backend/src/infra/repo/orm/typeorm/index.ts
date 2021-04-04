import { createConnection, getConnectionOptions } from 'typeorm'

interface IConnectionOptions {
  type: string
  host: string
  port: string
  database: string
  username: string
  password: string
}

function startConnection(connectionOptions?: IConnectionOptions): void {
  const isDevelopment = !connectionOptions
  if (isDevelopment) {
    getConnectionOptions().then(options => {
      Object.assign(options, { synchronize: true })
      createConnection().then(() => {
        console.log('[APP]: Database connection is done.')
      })
    })
  } else {
    const {
      type, host, port, database, username, password
    } = connectionOptions
    const intPort = parseInt(port, 10)
    if ((type === 'postgres' || type === 'mysql' || type === 'sqlite') && intPort) {
      getConnectionOptions().then(options => {
        Object.assign(options, {
          type,
          host,
          port: intPort,
          database,
          username,
          password
        })
        createConnection(options).then(() => {
          console.log('[APP]: Database connection is done.')
        })
      })
    } else {
      throw new Error('Invalid database settings.')
    }
  }
}

export { startConnection }
