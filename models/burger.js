var orm = require("../config/orm.js");

var burger = {
    selectAll:function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
          cb(res);
        });
      },

    //not sure if line 10 word create should be selectAll or what it is.. and thts the same for line 17 below//
      update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      }
}

module.exports = burger;