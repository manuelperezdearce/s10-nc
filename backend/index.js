const { app } = require('./server')
const { config } = require('./src/config/env');
const { dbInitializer } = require('./src/services/db');

 function main(){
  try {
    app.listen(config.port,function(){
      console.log(`server running on port: ${config.port}`)
  });
    dbInitializer()
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main()
