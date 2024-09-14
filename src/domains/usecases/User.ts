export type UserGender = 'female' | 'male' | 'unknown'

export type User = {
    id: string,
    gender: UserGender,
    name: string,
    location: string,
    email: string,
    picture: string
}