const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',           
  host: 'localhost',
  database: 'RickyMortyCharacters',    
  password: 'Ale+dra123',    
  port: 5432
});

(async () => {
  try {
    const client = await pool.connect();
    console.log('Conectado a la base de datos');
    client.release(); 
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
  }
})();

module.exports = pool;
