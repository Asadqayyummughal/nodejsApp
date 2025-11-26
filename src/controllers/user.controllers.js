export const getUsers = (req, res) => {
  res.json({
    success: true,
    data: ["Ali", "usman"],
  });
};
