const users = [
  {
    email: "shariarmahmud225@gmail.com",
    password: "password",
  },

  {
    email: "shariard58@gmail.com",
    password: "password",
  },

  {
    email: "abc@gmail.com",
    password: "password",
  },
];

export const getUserByEmail = (email) => {
  const found = users.find((user) => user.email === email);
};
