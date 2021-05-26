/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/index.js":
/*!******************************!*\
  !*** ./src/classes/index.js ***!
  \******************************/
/*! exports provided: Todo, TodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.class */ \"./src/classes/todo.class.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return _todo_class__WEBPACK_IMPORTED_MODULE_0__[\"Todo\"]; });\n\n/* harmony import */ var _todo_list_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list.class */ \"./src/classes/todo-list.class.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TodoList\", function() { return _todo_list_class__WEBPACK_IMPORTED_MODULE_1__[\"TodoList\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/classes/index.js?");

/***/ }),

/***/ "./src/classes/todo-list.class.js":
/*!****************************************!*\
  !*** ./src/classes/todo-list.class.js ***!
  \****************************************/
/*! exports provided: TodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoList\", function() { return TodoList; });\n/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.class */ \"./src/classes/todo.class.js\");\n\r\n\r\nclass TodoList {\r\n    \r\nconstructor () {\r\n    // this.todos = [];\r\n    this.cargarLocalStorage ();\r\n}\r\n\r\nnuevoTodo (todo) {\r\n    this.todos.push (todo);\r\n    this.guardarLocalStorage();\r\n\r\n}\r\n\r\neliminarTodo (id) {\r\n\r\n    this.todos = this.todos.filter (todo => todo.id != id ) //devuelve un arreglo excluyendo el todo que coincida con el id que yo tengo\r\n    this.guardarLocalStorage();\r\n}\r\n\r\nmarcarCompletado (id) { //necesitamos barrer todo el arreglo de las tareas, buscar el ID y cambiar el valor\r\n\r\n\r\n    for (const todo of this.todos) { //barremos todos los elementos del arreglo\r\n        if (todo.id == id ) { //si el todo.id es igual al ID BARRIDO QUE RECIBO se cumple el if\r\n\r\n            todo.completado =!todo.completado;\r\n            break;\r\n        }\r\n    }\r\n    this.guardarLocalStorage();\r\n\r\n}\r\n\r\neliminarCompletados (){\r\n\r\n    this.todos = this.todos.filter (todo => !todo.completado  ) //devuelve todas las tareas NO completadas\r\n\r\n}\r\n\r\nguardarLocalStorage(){\r\n\r\nlocalStorage.setItem ('todo', JSON.stringify (this.todos));\r\n}\r\n\r\ncargarLocalStorage (){\r\n\r\n        // if (localStorage.getItem ('todo')){\r\n        //     this.todos = JSON.parse (localStorage.getItem('todo'));\r\n        // }\r\n        // else {\r\n        //     this.todos=[];\r\n        // }\r\n\r\n    this.todos = (localStorage.getItem ('todo')) // Si en el localStorage existe esa condicion\r\n         ? JSON.parse (localStorage.getItem('todo')) // entonces voy a ejecutar esta linea\r\n            : []; // caso contrario, devolvemos un arreglo vacio\r\n\r\n            this.todos = this.todos.map (_todo_class__WEBPACK_IMPORTED_MODULE_0__[\"Todo\"].fromJson);\r\n \r\n                }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/classes/todo-list.class.js?");

/***/ }),

/***/ "./src/classes/todo.class.js":
/*!***********************************!*\
  !*** ./src/classes/todo.class.js ***!
  \***********************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return Todo; });\nclass Todo {\r\n\r\n    static fromJson ({id, tarea, completado, creado}) {\r\n        const tempTodo = new Todo (tarea);\r\n\r\n        tempTodo.id = id;\r\n        tempTodo.completado = completado;\r\n        tempTodo.creado = creado;\r\n\r\n        return tempTodo;\r\n\r\n    }\r\n\r\n\r\nconstructor (tarea) {\r\n    this.tarea = tarea;\r\n    this.id = new Date ().getTime(); //219831273\r\n    this.completado = false;\r\n    this.creado = new Date ();\r\n}\r\n\r\nimprimirClase () {\r\n    console.log(`${this.tarea} - ${ this.id}`);\r\n}\r\n\r\n}\n\n//# sourceURL=webpack:///./src/classes/todo.class.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: todoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoList\", function() { return todoList; });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ \"./src/classes/index.js\");\n/* harmony import */ var _js_componentes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/componentes */ \"./src/js/componentes.js\");\n\n\n\n\nconst todoList = new _classes__WEBPACK_IMPORTED_MODULE_1__[\"TodoList\"]();\n\ntodoList.todos.forEach(_js_componentes__WEBPACK_IMPORTED_MODULE_2__[\"crearTodoHtml\"]);\n\ntodoList.todos[0].imprimirClase();\n\n// console.log ('todos', todoList.todos);\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/componentes.js":
/*!*******************************!*\
  !*** ./src/js/componentes.js ***!
  \*******************************/
/*! exports provided: crearTodoHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"crearTodoHtml\", function() { return crearTodoHtml; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes */ \"./src/classes/index.js\");\n//Referencias en el HTML\n\n\n\n\nconst divTodoList = document.querySelector ('.todo-list');\nconst txtInput    = document.querySelector ('.new-todo');\nconst btnBorrar   = document.querySelector ('.clear-completed');\nconst ulFiltros   = document.querySelector ('.filters');\nconst anchorFiltros = document.querySelectorAll ('.filtro');\n\nconst crearTodoHtml = (todo) => {\n\nconst htmlTodo = `\n    <li class=\"${ (todo.completado) ? 'completed' : ''}\" data-id=\"${todo.id}\">\n        <div class=\"view\">\n          <input class=\"toggle\" type=\"checkbox\" ${ (todo.completado) ? 'checked' : ''}>\n         <label>${ todo.tarea }</label>\n          <button class=\"destroy\"></button>\n        </div>\n        <input class=\"edit\" value=\"Create a TodoMVC template\">\n</li>`\n\n    const div = document.createElement ('div');\n\n    div.innerHTML = htmlTodo;\n\n    divTodoList.append (div.firstElementChild); //aplicar primer hijo (primer elemento de la lista)\n\n    return div.firstElementChild;\n\n\n}\n\n//eventos\n\ntxtInput.addEventListener( 'keyup', (event) => { // Crea el evento con \"keyup\".\n  if (event.keyCode == 13 && txtInput.value.length > 0) { // Si presiono ENTER (13) se agrega el nuevo Todo y si la tarea esta vacia no se cumple el if.\n\n    const nuevoTodo = new _classes__WEBPACK_IMPORTED_MODULE_1__[\"Todo\"] ( txtInput.value); //Crea el nuevo Todo con el valor del Todo ingresado.\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"todoList\"].nuevoTodo(nuevoTodo); //Se agrega el nuevo Todo al todoList.\n    crearTodoHtml(nuevoTodo); // Se agrega el html del Todo.\n    txtInput.value=''; //Al ingresar la tarea, el casillero txt queda vacio.\n  }\n} );\n\ndivTodoList.addEventListener ( 'click', (event) => {\n    const nombreElemento = (event.target.localName); //nombreElemento toma el valort de cuando clickeamos en el label, button o input(o check) del div.\n    const todoElemento = event.target.parentElement.parentElement; // todoElemento toma el valor del LI donde está el ID\n    const todoId = todoElemento.getAttribute('data-id'); //todoId toma el valor del numero ID\n\n    if (nombreElemento.includes('input') ){ //click en el check\n      _index__WEBPACK_IMPORTED_MODULE_0__[\"todoList\"].marcarCompletado (todoId);\n      todoElemento.classList.toggle('completed'); //Hace que la tarea se tache al oprimir el check\n   \n    } else if (nombreElemento.includes('button') ){ // click en el boton X y borra el todo\n      _index__WEBPACK_IMPORTED_MODULE_0__[\"todoList\"].eliminarTodo (todoId);\n      divTodoList.removeChild(todoElemento); //Remover el elemento HTML del DIV\n    }\n});\n\n  btnBorrar.addEventListener('click', () => {\n\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"todoList\"].eliminarCompletados ();\n    for (let i = divTodoList.children.length-1; i>=0 ; i--) { // el for comienza a barrer desde la ultima posicion\n\n        const elemento = divTodoList.children[i];\n\n        if (elemento.classList.contains('completed')){\n          divTodoList.removeChild(elemento);\n          \n        }\n        console.log(elemento);\n    }\n\n\n  });\n\n  ulFiltros.addEventListener('click', (event) => {\n\n    const filtro = event.target.text;\n    if ( !filtro) {return;}\n\n    anchorFiltros.forEach (elem => elem.classList.remove ('selected'));\n    event.target.classList.add ('selected');\n    console.log(event.target);\n    \n\n\n    for (const elemento of divTodoList.children){\n      elemento.classList.remove ('hidden');\n      const completado= elemento.classList.contains('completed');\n\n      switch (filtro) {\n\n        case 'Pendientes':\n          if (completado){\n            elemento.classList.add('hidden');\n          }\n          break;\n\n        case 'Completados':\n          if (!completado){\n            elemento.classList.add ('hidden');\n          }\n          break;\n      }\n    }\n\n  });\n\n\n//# sourceURL=webpack:///./src/js/componentes.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });