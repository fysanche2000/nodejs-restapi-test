import express, { json } from 'express'
import employesRoutes from "./routes/employes.routes.js";
import indexRoutes from "./routes/index.routes.js";

import {PORT} from "./config.js";
const app = express()


//procesa los datos json
app.use(express.json())

//para usar las rutas definidas en el routes
app.use(indexRoutes)
app.use('/api',employesRoutes) // indica que antes de usar las rutas de employesRoutes se debe agregar el /api/

app.use((req, res, next) => {
    res.status(404).json({
        message:'endpoint not found'
    })
})

export default app;