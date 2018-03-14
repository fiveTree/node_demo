var qiniu = require('qiniu');

var parts = env.split('@')
var file = parts[1] + '.tar.gz'
var filePath = parts[0] + '/' + file;



var accessKey = 'qd6gNrr65vIXq4fJGjoY0_R4ZQf1Q-Zcrdby_1iS';
var secretKey = '1rY65f3zd0nWuSYOGbxXh8HfLa9uedUuQ60YVbkA';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

// var keyToOverwrite = 'qiniu.mp4';
var options = {
  scope: 'imoocdeploydb'
}
var putPolicy = new qiniu.rs.PutPolicy(options);
var uploadToken = putPolicy.uploadToken(mac);

var config = new qiniu.conf.Config();
// 空间对应的机房
config.zone = qiniu.zone.Zone_z1;

// 是否使用https域名
//config.useHttpsDomain = true;
// 上传是否使用cdn加速
//config.useCdnDomain = true;

var localFile = filePath;
var formUploader = new qiniu.form_up.FormUploader(config);
var putExtra = new qiniu.form_up.PutExtra();
var key = file;
// 文件上传
formUploader.putFile(uploadToken, key, localFile, putExtra, function (respErr,
  respBody, respInfo) {
  if (respErr) {
    throw respErr;
  }

  if (respInfo.statusCode == 200) {
    console.log(respBody);
  } else {
    console.log(respInfo.statusCode);
    console.log(respBody);
  }
});


