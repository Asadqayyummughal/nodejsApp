import User from "../models/user.model.js";
export const getAllUsersService = async () => {
  return await User.find();
};
export const createUserService = async (data) => {
  return await User.create(data);
};
