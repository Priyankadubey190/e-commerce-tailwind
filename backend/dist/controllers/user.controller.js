"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUser = void 0;
const user_modal_js_1 = require("../models/user.modal.js");
const newUser = async (req, res, next) => {
    try {
        const { name, email, photo, gender, _id, dob } = req.body;
        const user = await user_modal_js_1.User.create({
            name,
            email,
            photo,
            gender,
            _id,
            dob: new Date(dob),
        });
        return res
            .status(201)
            .json({ success: true, message: `Welcome ${user.name}` });
    }
    catch (error) {
        return res.status(400).json({ success: false, message: error });
    }
};
exports.newUser = newUser;
