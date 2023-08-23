import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class property_transaction extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    property_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'property',
        key: 'id'
      }
    },
    transaction_property_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'transaction',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'property_transaction',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "property_transaction_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
