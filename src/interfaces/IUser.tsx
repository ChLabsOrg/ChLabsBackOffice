interface IUser {
    id: String,
    name: String,
    email: String,
    login: String,
    token: String,
    refreshToken: String,
    tokenExpiration: Date,
    pictureUrl: String,
    remember: boolean
}

export default IUser;