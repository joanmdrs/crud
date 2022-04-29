import express, { Request, Response } from 'express'
import { PrismaClient } from "@prisma/client"

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.post("/", async (req: Request, res: Response) => {
    const { name, age, birth_date, phone, email } = req.body;
    const client = await prisma.client.create({
        data:{
            name: name,
            age: age,
            birth_date: birth_date,
            phone: phone,
            email: email
        },
    });
    res.json(client);

});



app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001");
})