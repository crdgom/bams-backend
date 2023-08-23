import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _condominium from  "./condominium.js";
import _payment_status from  "./payment_status.js";
import _payment_type from  "./payment_type.js";
import _property from  "./property.js";
import _property_transaction from  "./property_transaction.js";
import _property_user from  "./property_user.js";
import _role from  "./role.js";
import _transaction from  "./transaction.js";
import _transaction_type from  "./transaction_type.js";
import _user from  "./user.js";

export default function initModels(sequelize) {
  const condominium = _condominium.init(sequelize, DataTypes);
  const payment_status = _payment_status.init(sequelize, DataTypes);
  const payment_type = _payment_type.init(sequelize, DataTypes);
  const property = _property.init(sequelize, DataTypes);
  const property_transaction = _property_transaction.init(sequelize, DataTypes);
  const property_user = _property_user.init(sequelize, DataTypes);
  const role = _role.init(sequelize, DataTypes);
  const transaction = _transaction.init(sequelize, DataTypes);
  const transaction_type = _transaction_type.init(sequelize, DataTypes);
  const user = _user.init(sequelize, DataTypes);

  property.belongsTo(condominium, { as: "condominium", foreignKey: "condominium_id"});
  condominium.hasMany(property, { as: "properties", foreignKey: "condominium_id"});
  transaction.belongsTo(payment_status, { as: "payment_status", foreignKey: "payment_status_id"});
  payment_status.hasMany(transaction, { as: "transactions", foreignKey: "payment_status_id"});
  transaction.belongsTo(payment_type, { as: "payment_type", foreignKey: "payment_type_id"});
  payment_type.hasMany(transaction, { as: "transactions", foreignKey: "payment_type_id"});
  property_transaction.belongsTo(property, { as: "property", foreignKey: "property_id"});
  property.hasMany(property_transaction, { as: "property_transactions", foreignKey: "property_id"});
  property_user.belongsTo(property, { as: "property", foreignKey: "property_id"});
  property.hasMany(property_user, { as: "property_users", foreignKey: "property_id"});
  user.belongsTo(role, { as: "role", foreignKey: "role_id"});
  role.hasMany(user, { as: "users", foreignKey: "role_id"});
  property_transaction.belongsTo(transaction, { as: "transaction_property", foreignKey: "transaction_property_id"});
  transaction.hasMany(property_transaction, { as: "property_transactions", foreignKey: "transaction_property_id"});
  transaction.belongsTo(transaction_type, { as: "transaction_type", foreignKey: "transaction_type_id"});
  transaction_type.hasMany(transaction, { as: "transactions", foreignKey: "transaction_type_id"});
  condominium.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(condominium, { as: "condominia", foreignKey: "user_id"});
  property_user.belongsTo(user, { as: "user_property", foreignKey: "user_property_id"});
  user.hasMany(property_user, { as: "property_users", foreignKey: "user_property_id"});

  return {
    condominium,
    payment_status,
    payment_type,
    property,
    property_transaction,
    property_user,
    role,
    transaction,
    transaction_type,
    user,
  };
}
