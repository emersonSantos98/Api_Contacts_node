const database = require("../../models");


class RefreshTokenRepository {
  async getUserById(userId) {
    const User = await database.Users.findOne({where: {id: Number(userId)}})
    return User
  }
}

module.exports = RefreshTokenRepository;
