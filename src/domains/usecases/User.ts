export type UserGender = 'female' | 'male'

export type User = {
    gender: UserGender,
    name: {
        first: string,
        last: string,
    },
    location: {
        country: string,
    },
    email: string,
    picture: {
        medium: string,
    },
}