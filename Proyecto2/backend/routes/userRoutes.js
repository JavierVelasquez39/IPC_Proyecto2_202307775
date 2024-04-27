import express from 'express';
import fs from 'fs';

const router = express.Router();

router.post('/bulk', (req, res) => {
    const users = req.body;

    // Aquí debes validar los datos de los usuarios

    // Convierte los usuarios a una cadena JSON
    const usersJson = JSON.stringify(users, null, 2);

    // Escribe los usuarios en un archivo
    fs.writeFile('users.json', usersJson, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: 'Error al guardar usuarios' });
            return;
        }

        res.status(200).send({ message: 'Usuarios guardados exitosamente' });
    });
});

export default router;