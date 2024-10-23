const jsonserver = require("json-server")

const eventBookingServer = jsonserver.create()

const middleware = jsonserver.defaults()

const router = jsonserver.router("db.json")

const PORT = 4300 || process.env.PORT

eventBookingServer.use(middleware)
eventBookingServer.use(router)

 eventBookingServer.listen(PORT,()=> {
  console.log(`server running successfully at port number ${PORT}`);
  
 })