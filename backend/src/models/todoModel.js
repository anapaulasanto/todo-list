import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async (name) => {
    await prisma.todos.create({
        data: {
            name
        }
    })
    return 'create sucess'
}

export const read = async () => {
    let dataTodo = await prisma.todos.findMany()

    return dataTodo
}

export const update = async (id, name) => {
    try {
        await prisma.todos.update({
            where: {
                id
            },
            data: {
                name
            }
        })
        return 'Update sucess'
        
    } catch (err) {
        console.log('deu ruim no model', err)
    }

}

export const del = async (id) => {
    try {
        await prisma.todos.delete({
            where: {
                id
            }
        })
        return 'Delete sucess'

    } catch (err) {
        console.log('deu ruim no model', err)
    }

}
