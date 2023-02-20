const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'localhost',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'apidesarrollo',
    password: env.DB_PASSWORD || '123456',
    database: env.DB_NAME || 'baseapi',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;