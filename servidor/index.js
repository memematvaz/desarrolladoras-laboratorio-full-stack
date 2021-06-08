const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const { Schema, model } = mongoose
const app = express();
const PORT = 5000

// Definimos el esquema del usuario que vamos a usar
const userSchema = new Schema({
    name    : { type: String },
    phone   : { type: String },
}, {
    timestamps: true,
    versionKey: false
})

mongoose.connect('mongodb://localhost/nombrebd', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
}).then( (res) =>{
    console.log('Nos hemos conectado a Mongo')
}).catch((err) => console.log(err));

const User = model('user', userSchema)

app.use(cors())
   .use(express.urlencoded({extended:true}))
   .use(express.json())
   .listen( 5000 , ()=>{
       console.log('Iniciando server by Edu')
   })

// Configuramos el servidor
app.listen( PORT , ()=>{
    console.log('Servidor corriendo')
})

// http://localhost:5000/users
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
})
// http://localhost:5000/user con DATOS en Body de POSTMAN
app.post('/user', async (req, res) => {
    const nuevoUsuario = new User(req.body)
    await nuevoUsuario.save()
    res.send({ message: "Usuario creado" })
})

// http://localhost:5000/user/60ab5e4b249c080e27bb0ea8
app.put('/user/:id', async (req, res) => {
    const userUpdated = await User.findByIdAndUpdate(req.params.id, req.body)
    res.json({ status: "Usuario actualizado" })
})

// http://localhost:5000/user/60ab5e4b249c080e27bb0ea8
app.delete('/user/:id', async (req, res) => {
    const userDeleted = await User.findByIdAndDelete(req.params.id)
    res.json({ status: "Usuario eliminado" })
})

// http://localhost:5000/user/60a2103040e5eb679ed6a31e
app.get('/user/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    res.send(user)
})