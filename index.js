const json_serevr=require('json-server') //1
const cors=require('cors') //3

//create json server
const umsApp=json_serevr.create()  //2
// create middleware  for json -js data conversion
const middleware=json_serevr.defaults()  //5

//create route for connect json file(user.json) with main file (index.js)
const route=json_serevr.router('user.json') //7

//apply cors
umsApp.use(cors())  //4

//apply middleware as application specific middleware
umsApp.use(middleware)  //6

//apply route
umsApp.use(route)  //8

const PORT=8000  //9
umsApp.listen(PORT,()=>{
    console.log(`___UMS Server Started at ${PORT}_______`);
})


