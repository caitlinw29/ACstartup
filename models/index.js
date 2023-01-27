const User = require("./User");
const Profile = require("./Profile");
const Bug = require("./Bug");
const User_Bug = require("./User_Bug");

//one to one relationship between profile and user
User.hasOne(Profile, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Profile.belongsTo(User, {
  foreignKey: "user_id",
});

User.belongsToMany(Bug, {through: 'User_Bug'});
Bug.belongsToMany(User, {through: 'User_Bug'});

User_Bug.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user'
})
User_Bug.belongsTo(Bug, {
  foreignKey: 'bugId',
  as: 'bug'
})


module.exports = { User, Profile, Bug, User_Bug };
