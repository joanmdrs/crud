import express, { Request, Response } from 'express'
import { PrismaClient } from "@prisma/client"

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.post("/register", async (req: Request, res: Response) => {
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


app.get("/", async (req: Request, res: Response) => {
    const clients = await prisma.client.findMany();
    res.json(clients);

});

app.get("/byId/:id", async(req: Request, res: Response) => {
    const id = req.params.id;
    const client = await prisma.client.findUnique({
        where: {
            id: Number(id)
        },
    });
    res.json(client);
});

app.put("/", async (req: Request, res: Response) => {
    const { id, name, age, birth_date, phone, email } = req.body;
    const updateClient = await prisma.client.update({
        where :{
            id: id
        },
        data:{
            name: name,
            age: age,
            birth_date: birth_date,
            phone: phone,
            email: email
        },
    });
    res.json(updateClient);
});

app.delete("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const deleteUser = await prisma.client.delete({
        where: {
            id: Number(id),
        },
    });
    res.json(deleteUser)
});

app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001");
})