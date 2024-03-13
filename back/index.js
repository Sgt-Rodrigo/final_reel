//*? dotenv requirement should come before the app.
require('dotenv').config();
const app = require('./src/server');
const dbCon = require('./src/config/dbCon');

const port = process.env.SERVER_PORT || 3002;


dbCon().then(res =>{
    app.listen(port, ()=>console.log(`S E R V E R---IS---ONLINE:-${port}`));
})
.catch(err => {
    console.log('failed Database conection')
})


