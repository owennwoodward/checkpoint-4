import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";



const todosApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/owen/todos'
})


class TodosService {

    async addTodo(todoData) {
        const res = await todosApi.post('', todoData)
        console.log('task', res.data);
        ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
    }

    async getTodos() {
        const res = await todosApi.get('')
        console.log(res.data);
        ProxyState.todos = res.data.map(t => new Todo(t))
        console.log('we got here', ProxyState.todos);
    }

    async deleteTodo(id) {
        const res = await todosApi.delete(id)
        console.log('deleting todo', res.data);
        ProxyState.todos = ProxyState.todos.filter(t => t.id != id)


    }

    async checkBox(id) {
        let todo = ProxyState.todos.find(t => t.id == id)
        todo.completed = !todo.completed
        const res = await todosApi.put(todo.id, todo)
        console.log(res.data);
        ProxyState.todos = ProxyState.todos
    }
}

export const todosService = new TodosService()