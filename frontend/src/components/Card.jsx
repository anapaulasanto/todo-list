import { Button } from "./ui/button"
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { useEffect, useRef, useState } from "react"
import api from '../services/api.js'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "./ui/dialog";

export async function createTodo(inputCreate) {
    try {
        await api.post('/createTodo', {
            name: inputCreate
        })
        window.location.reload();

    } catch (err) {
        console.log('Erro ao criar as tasks', err);
    }
}

const Card = () => {
    const [todos, setTodos] = useState([])
    const inputName = useRef();

    async function getTodos() {
        try {
            const data = await api.get('/todos')
            setTodos(data.data)
        } catch (err) {
            console.log('Erro ao mostrar as tasks', err);
        }
    }

    async function deleteTodos(id) {
        try {
            await api.delete(`/todos/${id}`)
            getTodos()
        } catch (err) {
            console.log('Erro ao deletar as tasks', err);
        }
    }

    async function updateTodos(id) {
        try {
            await api.put(`/todos/${id}`, {
                name: inputName.current.value,
            })
            window.location.reload();

        } catch (err) {
            console.log('Erro ao atualizar o status', err);
        }
    }

    useEffect(() => {
        getTodos()
    }, []);

    return (
        <div className="flex flex-col justify-center items-center gap-8 mt-5 flex-1">
            {todos.map((todo) => (
                <div key={todo.id}>
                    <div className="flex items-center justify-between bg-zinc-700 w-96 p-7 rounded-lg shadow-xl mb-2 text-white  border border-zinc-800" >
                        <div className="flex flex-col ">
                            <div className="flex gap-3 items-center">

                                <h3 className="font-semibold">{todo.name}</h3>
                            </div>

                        </div>
                        <div className="flex">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="rounded-3xl text-zinc-400 hover:text-zinc-100" variant="Ghost "><FaEdit /></Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]  bg-zinc-900 border-zinc-700">
                                    <DialogHeader>
                                        <DialogTitle className="text-white text-2xl">Edit Task</DialogTitle>
                                        <DialogDescription>
                                            Edit your task here. Click save when you're done.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <input placeholder={todo.name} className="col-span-3 border-solid border border-zinc-600 rounded-xl p-5 w-96 outline-none" ref={inputName} onKeyUp={(e) => {
                                                if (e.key == 'Enter') {
                                                    updateTodos()
                                                }
                                            }} />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button onClick={() => updateTodos(todo.id)} className="rounded-3xl bg-zinc-700">Save</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                            <Button onClick={() => deleteTodos(todo.id)} className="rounded-3xl text-zinc-400  hover:text-zinc-100" variant="Ghost"><FaTrashCanArrowUp />
                            </Button>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Card;