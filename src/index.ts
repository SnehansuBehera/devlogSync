import express from "express";
import prisma from "./config/prisma-config.ts";

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hello, world");
})
app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();
    if (users.length === 0) {
        res.status(404).json({ message: "No users found" });
        return;
    }
    res.json(users);
});

app.listen(PORT, () => {
    console.log("Server is running at PORT:", PORT);
})