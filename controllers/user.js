import { registerUserValidator, loginUservalidator } from "../validators/user.js";
import { UserModel } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const registerUser = async (req, res, next) => {
    try {
        // validate user input
        const { error, value } = registerUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        // check if user does not exit
        const user = await UserModel.findOne({ email: value.email });
        if (user) {
            return res.status(409).json('User already exist');
        }
        // hash their password
        const hashedPassword = bcrypt.hashSync(value.password, 10);
        // save user into database
        // alternative to the await "value.password = hashedPassword"
        await UserModel.create({
            ...value,
            password: hashedPassword
        });
        // send user confirmation email
        // respond to request
        res.json('User registered');
    } catch (error) {
        next(error)
    }

}

export const loginUser = async (req, res, next) => {
    try {
        // validate user input
        const { error, value } = loginUservalidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        // find one user identifier
        const user = await UserModel.findOne({ email: value.email });
        if (!user) {
            return res.status(404).json('User does not exit')
        }
        // compare their password
        const correctPassword = bcrypt.compareSync(value.password, user.password);
        if (!correctPassword) {
            return res.status(401)('Invalid credential')
        }
        //sign a token for user
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_PRIVATE_KEY,
            { expiresIn: '24h' }
        );
        // respond to request
        res.json({
            message: 'User logged in',
            acessToken: token
        });

    } catch (error) {
        next(error)
    }
}


export const getProfile = (req, res, next) => {
    res.json('User profile');
}


export const logoutUser = (req, res, next) => {
    res.json('User logged out!');
}

export const updateProfile = (req, res, next) => {
    res.json('User profile updated');
}