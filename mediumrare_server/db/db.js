const pg = require('pg');

const config = {
   user: 'Alex',
   database: 'mediumrare_database',
   password: '',
   port: '5432',
   idleTimeoutMillisL 30000,
};

const pool = new pgPool(config);

pool.on('connect', () => {
   console.log('connected to the Database');
});

pool.on('remove', () => {
   console.log('client removed');
   process.exit(0);
});

// export pool and tables to be accessible.
module.exports = {
   user_info,
   vinyl_information,
   pool,
};

require('make-runnable'); 
