import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
    try {
        //throw new Error('DB ERROR')
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({ message : 'algun error'})
    }
    
}

export const getEmployee = async (req, res) => {
    try {
        console.log(req.params.id) //obtiene los objetos de la url
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])

        if(rows.length <=0) return res.status(404).json({message: 'empleado no encontrado'})
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({ message : 'algun error'})
    }
    
    //res.send('obteniendo un empleado')
}

export const createEmployee = async (req, res) => {
    //
    try {
        console.log(req.body)
        const {name, salary} = req.body
        const [rows] = await pool.query('INSERT INTO employee (name,salary) VALUES(?,?)', [name, salary])
        res.send({
            id: rows.insertId,
            name,
            salary,
        })
    } catch (error) {
        return res.status(500).json({ message : 'algun error'})
    }
    
}

export const deleteEmployee =  async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
        if(result.affectedRows <= 0) return res.status(404).json({message:'empleado no encontrado'})
        console.log(result)
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message : 'algun error'})
    }
    
}


//export const updateEmployee =  (req, res) => res.send('actualizando empleados') forma sensilla

export const updateEmployee =  async (req, res) => {
    try {
        const {id} = req.params // equivalente a const id= req.params.id
        const {name, salary} = req.body
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?,salary) WHERE id = ?', [name, salary, id])
        if(result.affectedRows === 0 ) return res.status(404).json({message: 'empleado no encontrado'})
        console.log(result)

        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({ message : 'algun error'})
    }
    
}
