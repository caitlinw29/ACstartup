const User = require("./User");
const Profile = require("./Profile");
const Bug = require("./Bug");
const User_Bug = require("./User_Bug");
const Fish = require("./Fish");
const User_Fish = require("./User_Fish");


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
});

User_Bug.belongsTo(Bug, {
  foreignKey: 'bugId',
  as: 'bug'
});

User.belongsToMany(Fish, {through: 'User_Fish'});
Fish.belongsToMany(User, {through: 'User_Fish'});

User_Fish.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user'
});

User_Fish.belongsTo(Fish, {
  foreignKey: 'fishId',
  as: 'fish'
});


module.exports = { User, Profile, Bug, User_Bug, Fish, User_Fish };
