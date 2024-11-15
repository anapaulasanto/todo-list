import { create, read, update, del } from "../models/todoModel.js"

export const createTodo = async (req, res) => {
    try {
        const { name } = req.body
        await create(name)
        res.status(201).json({ message: 'create sucess' })
        
    } catch (error) {
        console.log(error)
    }
}

export const getAllTodos = async (req, res) => {
    try {
        const todo = await read()
        res.send(todo)

    } catch (error) {
        console.log(error);
    }
}

export const editTodo = async (req, res) => {
    try {
        const { id } = req.params
        const { name } = req.body

        const data = await update(parseInt(id), name)
        res.send(data)

    } catch (err) {
        console.log('deu ruim no controller', err)
    }
    
}

export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params
        await del(parseInt(id))

        res.status(200).json({ message: 'delete sucess' })

    } catch (err) {
        console.log('deu ruim no controller', err)
    }
    
}