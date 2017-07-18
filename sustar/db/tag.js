const mongoose = require('mongoose');
const url = 'mongodb://bug100000:myself@ds161262.mlab.com:61262/sustar';
mongoose.connect(url);

let db = mongoose.connection;

db.once('open', function(){
  console.log('connect db ok!');
});

let Schema = mongoose.Schema;

let tagsShema = new Schema({
tag: String,
class: [Array], //存放所属的类
issuesnum: Number,  //关注该标签的人数
describe: String,   //对应标签的描述
});
module.exports.tags = mongoose.model('tags', tagsShema);  //创建tags集合的模型并共享
