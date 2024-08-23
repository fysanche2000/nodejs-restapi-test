import app from "./app.js";
import { PORT } from "./config.js";


//INICIALIZA LA APLICACION
app.listen(PORT)
console.log('server running on port', PORT)