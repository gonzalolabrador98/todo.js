
import {Todo} from './todo.class';
export class TodoList {
    
constructor () {
    // this.todos = [];
    this.cargarLocalStorage ();
}

nuevoTodo (todo) {
    this.todos.push (todo);
    this.guardarLocalStorage();

}

eliminarTodo (id) {

    this.todos = this.todos.filter (todo => todo.id != id ) //devuelve un arreglo excluyendo el todo que coincida con el id que yo tengo
    this.guardarLocalStorage();
}

marcarCompletado (id) { //necesitamos barrer todo el arreglo de las tareas, buscar el ID y cambiar el valor


    for (const todo of this.todos) { //barremos todos los elementos del arreglo
        if (todo.id == id ) { //si el todo.id es igual al ID BARRIDO QUE RECIBO se cumple el if

            todo.completado =!todo.completado;
            break;
        }
    }
    this.guardarLocalStorage();

}

eliminarCompletados (){

    this.todos = this.todos.filter (todo => !todo.completado  ) //devuelve todas las tareas NO completadas

}

guardarLocalStorage(){

localStorage.setItem ('todo', JSON.stringify (this.todos));
}

cargarLocalStorage (){

        // if (localStorage.getItem ('todo')){
        //     this.todos = JSON.parse (localStorage.getItem('todo'));
        // }
        // else {
        //     this.todos=[];
        // }

    this.todos = (localStorage.getItem ('todo')) // Si en el localStorage existe esa condicion
         ? JSON.parse (localStorage.getItem('todo')) // entonces voy a ejecutar esta linea
            : []; // caso contrario, devolvemos un arreglo vacio

            this.todos = this.todos.map (Todo.fromJson);
 
                }

}