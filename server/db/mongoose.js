var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
//var = '192.168.1.63:27017';
//mongodb://username:password@host:port/database
var paee='It_d@121!)(';
mongoose.connect('mongodb://96.57.152.179:27017/admin',
                 {user: 'admin', pass: 'It_d@121!)('});
//mongoose.connect(`mongodb://admin:${paee}@96.57.152.179:27017/admin`);
//mongoose.connect(`mongodb://admin:admin123@192.168.1.63:27017/admin`);
//mongoose.connect(`mongodb://localhost:3000/mytest`);
module.exports={mongoose};
