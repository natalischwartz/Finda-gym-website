import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path'
import { fileURLToPath } from 'url';
// import { config } from 'dotenv'
// config();

const app = express();
const PORT = process.env.PORT || 4000;

//Importamos las rutas de routes
import indexRoutes from './src/routes/index.routes.js'

// Para obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Motor de plantilla
app.set("view engine" , "ejs")
app.set("views", path.resolve(__dirname, "src/views"));


// Mostrar la ruta generada por path.join(__dirname, 'public')
const publicPath = path.resolve(__dirname, 'public');
console.log(`La ruta para archivos estáticos es: ${publicPath}`);


app.use(express.static(publicPath));
app.use(cors())
app.use(morgan('dev'))
app.use(express.json());

//Rutas
app.use(indexRoutes);

app.listen(PORT,()=> console.log(`http://localhost:${PORT}`));