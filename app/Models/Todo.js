import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";



export class Todo {
    constructor(data) {
        this.description = data.description
        this.id = data.index || data.id
        this.completed = data.completed || false
    }

    get Template() {
        return ` 
        <div class="col-12 d-flex justify-content-between">
        <input type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.todosController.checkBox('${this.id}')"><h4>${this.description}</h4><i class="mdi mdi-delete selectable"
          onclick="app.todosController.deleteTodo('${this.id}')"></i>
      </div>
        `
    }
}