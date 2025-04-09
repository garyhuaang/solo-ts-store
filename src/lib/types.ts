export type LoginCredentials = {
  identifier: string
  password: string
}
export type User = {
  jwt: string
  identifier: string
}

export type UserState = {
  user: User | null
}
