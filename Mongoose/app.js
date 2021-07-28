const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
//mongoose.connect('mongodb://localhosttt/tesddt', {useNewUrlParser: true, useUnifiedTopology: true});//ismein 'mongodb://localhosttt/tesddt' mein check krega localhosttt aisa koi  host hai aur usmein aisa tesddt koi database hai jo ki nhi hai toh error dega

const db = mongoose.connection;//isse connection bna skte hai
db.on('error', console.error.bind(console, 'connection error:'));//agar connection mein error ayega toh ye chlega
db.once('open', function() {//agar connection hoga toh iska callback function call hoga
  // we're connected!
  console.log("We are connected bro/sis.....");
});