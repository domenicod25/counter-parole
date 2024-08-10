import express from 'express';
import multer from 'multer';
import path from 'path';
import { analyzeText } from './utils';

const app = express();
const port = 3000;

// Configurazione di multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Servire file statici
app.use(express.static('public'));

// Endpoint per caricare e analizzare il file
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('Nessun file caricato.');
    }

    const fileContent = req.file.buffer.toString('utf-8');
    const analysis = analyzeText(fileContent);

    res.json(analysis);
});

// Start server
app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});
