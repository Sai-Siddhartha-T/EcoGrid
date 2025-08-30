// Example Controller
const getUsers = (req, res) => {
  res.json([
    { id: 1, name: "aryan sahu" },
    { id: 2, name: "raj sharma" },
  ]);
};

module.exports = { getUsers };
