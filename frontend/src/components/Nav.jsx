import { Button } from "./ui/button"
import { createTodo } from "./Card"
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "./ui/dialog";
import { useRef } from "react";

const Nav = () => {
    const handleCreate = async () => {
        try {
            if (inputCreate.current) {
                await createTodo(inputCreate.current.value)
            }
            console.log('deu certo try do handle do nav');

        } catch(err) {
            console.log('deu erro no try do handle');

        }

    }

    const inputCreate = useRef();
    return (
        <div >
            <nav className="bg-zinc-800 flex justify-around pb-10 pt-8" >
                <h1 className="text-white text-3xl font-semibold">Task List</h1>
                <Dialog >
                    <DialogTrigger  asChild>
                        <Button className="bg-zinc-800 text-slate-200  rounded-xl" variant="outline">+ New</Button>
                    </DialogTrigger>
                    <DialogContent  className="sm:max-w-[425px] bg-zinc-900 border-zinc-700">
                        <DialogHeader >
                            <DialogTitle className="text-white text-2xl">New Task</DialogTitle>
                            <DialogDescription>
                                Descript your task here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <input className="col-span-3 border-solid border border-zinc-600 rounded-xl p-5 w-96 outline-none text-black" ref={inputCreate} onKeyUp={(e) => {
                                    if(e.key == 'Enter') {
                                        handleCreate()
                                    }
                                }} />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button onClick={handleCreate} className="rounded-3xl bg-zinc-700">Save
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </nav>
            
        </div>
    )
}
export default Nav