import {
  getAllUsersService,
  createUserService,
} from "../services/user.service.js";

export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsersService();
    res.json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await createUserService(req.body);
    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
