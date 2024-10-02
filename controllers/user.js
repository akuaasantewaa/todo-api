export const register = (req, res, next) => {
    res.json('User registered was added!');
}

export const login = (req, res, next) => {
    res.json('User logged in!');

}
export const logout = (req, res, next) => {
    res.json('User logged out!');
}