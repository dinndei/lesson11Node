import { User } from '../models/user.js'
import bcrypt from 'bcryptjs'
import { generateToken } from '../config/jwt.js';
export const getAllUsers = async (req, res) => {
    try {
        let all = await Book.find({}, "-passwd");
        res.json(all);
    }
    catch {
        res.status(400).send("sorry but error in all users");
    }
}
export const addUser = async (req, res) => {
    try {
        let { userName, passwd } = req.body;
        if (!userName || !passwd)
            return res.status(400).send("mongoose req missing parameters");
        if (/[0-9]{1}[a-z]{1}/.test(passwd))
            return res.status(400).send("passwd not valid!!!! give a better one!");
        //הצפנת סיסמא
        let secret = await bcrypt.hash(passwd, 7);
        let newUser = new userName({ userName, passwd: secret })
        await newUser.save();
        let { _id, userName: name, role } = newUser;
        let token = generateToken(newUser);
        res.json({ _id, role, userName: name, token});
        



    }
    catch {
        res.status(500).send("error in adding new user");
    }
}
export const login = async (req, res) => {
    try {
        let { userName, passwd } = req.body;
        if (!userName || !passwd)
            return res.status(400).send("mongoose req missing parameters");
        if (!/[0-9]{1}[a-z]{1}/.test(passwd))
            return res.status(400).send("passwd not valid!!!!");
        let user = await User.findOne(userName);
        if (!user)
            return res.status(400).send("אין כזה יוזר");
        if (!await bcrypt.compare(passwd, user.passwd))
            return res.status(400).send("הסיסמא שגויה");
        let { userName: name, _id, role } = loggedInUser;
        let token = generateToken(user);
        res.json({ _id, userName: name, role, token });

    }
    catch {
        res.status(400).send("error in loging in user");
    }
}
