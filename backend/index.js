const express = require('express');
const cors = require('cors');
const { connection } = require('./config/db');
const { userRouter } = require('./routes/user.routes');
const { noteRouter } = require('./routes/notes.routes');
require('dotenv').config();
const PORT = process.env.PORT || 4500;


const app = express();
app.use(cors())
app.use(express.json())
app.use('/api/users',userRouter);
app.use("/api/notes",noteRouter)

app.listen(PORT, async () => {
    try {
        await connection;
        console.log("connected to db....");
        console.log("Server is running at https://localhost:4500");
    } catch (error) {
        console.log(error);
    }
})