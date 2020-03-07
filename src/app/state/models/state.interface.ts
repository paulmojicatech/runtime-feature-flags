export interface User {
    name: string,
    featureFlags: string[]
}

export interface StateStore {
    user: User
}