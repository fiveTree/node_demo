var User = require("./user.js");

/**
 * 插入
 */
/* function insert() {
 
    var user = new User({
        username : 'Tracy McGrady',                 //用户账号
        userpwd: 'abcd',                            //密码
        userage: 37,                                //年龄
        logindate : new Date()                      //最近登录时间
    });

    user.save(function (err, res) {

        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }

    });
}

insert(); */

/* 
   更新
*/
// var User = require("./user.js");

function update() {
    var wherestr = { 'username': 'Tracy McGrady' };
    var updatestr = { 'userpwd': '12345679890' };

    User.update(wherestr, updatestr, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

update();