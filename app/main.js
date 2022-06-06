import { TodosController } from "./Controllers/TodosController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeathersController } from "./Controllers/WeathersController.js";

class App {
  // valuesController = new ValuesController();

  quotesController = new QuotesController()

  weathersController = new WeathersController()

  imagesController = new ImagesController()

  todosController = new TodosController()
}

window["app"] = new App();
