const app = require('./src/server');
const dbCon = require('./src/config/dbCon');


dbCon().then(res =>{
    app.listen(3001, ()=>console.log('S E R V E R---IS---ONLINE'));
})
.catch(err => {
    console.log('failed Database conection')
})


