const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class CartUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
      this.belongsTo(models.Product, { foreignKey: "productId" });
    }
  }
  CartUser.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      priceForAllOneProduct: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CartUser",
    }
  );
  return CartUser;
};
