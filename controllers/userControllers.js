//make same as productController.js
const User = require('../models/user');

exports.createUser = async (req, res) => {
    await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    return res.status(201).json({ message: 'User Created' });
}

exports.getAllUsers = async (req, res) => {
    const allUsers = await User.find({});

    return res.json(allUsers);
}

exports.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);

    return res.json(user);
}

exports.updateUser = async (req, res) => {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body);

    return res.json(updated);
}

exports.deleteUser = async (req, res) => {
    const deleted = await User.findByIdAndDelete(req.params.id);

    return res.json(deleted);
}
