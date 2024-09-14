export type CustomerGender = 'female' | 'male'

export type Customer = {
    id: string,
    gender: CustomerGender,
    name: string,
    location: string,
    email: string,
    picture: string
}