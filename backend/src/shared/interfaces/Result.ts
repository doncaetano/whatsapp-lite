export class Result<T> {
  isSuccess: boolean

  isFailure: boolean

  error: T | string

  value: T

  constructor(isSuccess: boolean, error?: T | string, value?: T) {
    if (isSuccess && error) {
      throw new Error('[Invalid Operation]: A result cannot be successful and contain an error')
    }
    if (!isSuccess && !error) {
      throw new Error('[Invalid Operation]: A failing result needs to contain an error message')
    }

    this.isSuccess = isSuccess
    this.isFailure = !isSuccess
    this.error = error
    this.value = value

    Object.freeze(this)
  }

  getValue(): T {
    if (!this.isSuccess) {
      throw new Error('Can\'t get the value of an error result. Use \'getError\' instead.')
    }

    return this.value
  }

  getError(): T {
    return this.error as T
  }
}
