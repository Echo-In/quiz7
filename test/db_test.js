const { User, History } = require("../models");
const find = async () => {
  try {
    const user = await User.findAll({
      include: [History],
    });
    console.log(user);
  } catch (err) {
    console.log("error saat menjalankan user findall", err);
  }
};
find();
