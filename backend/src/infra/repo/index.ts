import { startConnection } from './orm/typeorm'

interface IEnvironmentSettings {
  DB_TYPE?: string
  DB_HOST?: string
  DB_PORT?: string
  DB_NAME?: string
  DB_USERNAME?: string
  DB_PASSWORD?: string
}

if (process.env.NODE_ENV === 'development') {
  startConnection()
} else {
  const {
    DB_TYPE: type,
    DB_HOST: host,
    DB_PORT: port,
    DB_NAME: database,
    DB_USERNAME: username,
    DB_PASSWORD: password
  } = <IEnvironmentSettings>process.env

  if (type && host && port && database && username && password) {
    startConnection({
      type,
      host,
      port,
      database,
      username,
      password
    })
  } else {
    throw new Error('[APP]: missing database settings')
  }
}
