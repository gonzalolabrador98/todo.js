//Referencias en el HTML
import { todoList } from '../index';
import {Todo} from '../classes';


const divTodoList = document.querySelector ('.todo-list');
const txtInput    = document.querySelector ('.new-todo');
const btnBorrar   = document.querySelector ('.clear-completed');
const ulFiltros   = document.querySelector ('.filters');
const anchorFiltros = document.querySelectorAll ('.filtro');

export const crearTodoHtml = (todo) => {

const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
          <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : ''}>
         <label>${ todo.tarea }</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
</li>`

    const div = document.createElement ('div');

    div.innerHTML = htmlTodo;

    divTodoList.append (div.firstElementChild); //aplicar primer hijo (primer elemento de la lista)

    return div.firstElementChild;


}

//eventos

txtInput.addEventListener( 'keyup', (event) => { // Crea el evento con "keyup".
  if (event.keyCode == 13 && txtInput.value.length > 0) { // Si presiono ENTER (13) se agrega el nuevo Todo y si la tarea esta vacia no se cumple el if.

    const nuevoTodo = new Todo ( txtInput.value); //Crea el nuevo Todo con el valor del Todo ingresado.
    todoList.nuevoTodo(nuevoTodo); //Se agrega el nuevo Todo al todoList.
    crearTodoHtml(nuevoTodo); // Se agrega el html del Todo.
    txtInput.value=''; //Al ingresar la tarea, el casillero txt queda vacio.
  }
} );

divTodoList.addEventListener ( 'click', (event) => {
    const nombreElemento = (event.target.localName); //nombreElemento toma el valort de cuando clickeamos en el label, button o input(o check) del div.
    const todoElemento = event.target.parentElement.parentElement; // todoElemento toma el valor del LI donde está el ID
    const todoId = todoElemento.getAttribute('data-id'); //todoId toma el valor del numero ID

    if (nombreElemento.includes('input') ){ //click en el check
      todoList.marcarCompletado (todoId);
      todoElemento.classList.toggle('completed'); //Hace que la tarea se tache al oprimir el check
   
    } else if (nombreElemento.includes('button') ){ // click en el boton X y borra el todo
      todoList.eliminarTodo (todoId);
      divTodoList.removeChild(todoElemento); //Remover el elemento HTML del DIV
    }
});

  btnBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados ();
    for (let i = divTodoList.children.length-1; i>=0 ; i--) { // el for comienza a barrer desde la ultima posicion

        const elemento = divTodoList.children[i];

        if (elemento.classList.contains('completed')){
          divTodoList.removeChild(elemento);
          
        }
        console.log(elemento);
    }


  });

  ulFiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;
    if ( !filtro) {return;}

    anchorFiltros.forEach (elem => elem.classList.remove ('selected'));
    event.target.classList.add ('selected');
    console.log(event.target);
    


    for (const elemento of divTodoList.children){
      elemento.classList.remove ('hidden');
      const completado= elemento.classList.contains('completed');

      switch (filtro) {

        case 'Pendientes':
          if (completado){
            elemento.classList.add('hidden');
          }
          break;

        case 'Completados':
          if (!completado){
            elemento.classList.add ('hidden');
          }
          break;
      }
    }

  });
