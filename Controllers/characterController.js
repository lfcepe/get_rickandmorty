const pool = require('../Models/databaseConfig');

const getPersonajeGuardado = async (req, res) => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();

    for (const personaje of data.results) {
      const { id, name, status, species, gender } = personaje;

      await pool.query(
        'INSERT INTO characters (id, name, status, species, gender) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (id) DO NOTHING',
        [id, name, status, species, gender]
      );
    }

    res.status(200).json({ message: 'Datos guardados en la base de datos' });
  } catch (error) {
    console.error('Error al guardar datos:', error);
    res.status(500).json({ error: 'Error al guardar datos' });
  }
};

module.exports = { getPersonajeGuardado };