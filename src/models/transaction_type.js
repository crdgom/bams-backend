import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class transaction_type extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'transaction_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "transaction_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
