import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";



function _drawTodos() {
    let todos = ProxyState.todos
    let template = ''
    let todoCount = 0
    todos.forEach(t => {
        template += t.Template
        if (todoCount) {
            todoCount++
        }
    })
    document.getElementById('todos').innerHTML = template
    document.getElementById('todo-count').innerText = todoCount
}



export class TodosController {
    constructor() {
        this.getTodos()
        ProxyState.on('todos', _drawTodos)
    }

    async addTodo() {
        window.event.preventDefault()
        // let description = window.event.target.description.value
        // let id = window.event.target.id.value
        let form = window.event.target
        let todoData = {
            description: form.description.value
        }
        try {
            todosService.addTodo(todoData)
        } catch (error) {
            console.error(error);
            Pop.toast(error.message, 'error')
        }
    }

    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
            console.error(error);
            Pop.toast(error.message, 'error')
        }
    }

    async deleteTodo(id) {
        if (await Pop.confirm('are you sure you want to delete this?'))
            try {
                await todosService.deleteTodo(id)
            } catch (error) {
                console.error(error);
                Pop.toast(error.message, 'error')
            }
    }

    async checkBox(id) {
        try {
            await todosService.checkBox(id)
        } catch (error) {

        }
    }
}