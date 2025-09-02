 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/README.md
index 0000000000000000000000000000000000000000..58ef6f3580fd441bd6f9139ac562fd5fb1870667 100644
--- a//dev/null
+++ b/README.md
@@ -0,0 +1,153 @@
+# 🦉 Happy Owls - Fundamentos de JavaScript
+
+Bienvenido a este repositorio con ejemplos de los fundamentos de **JavaScript**. Aquí encontrarás scripts organizados por temas como variables, tipos de datos, arreglos, funciones, asincronía y programación orientada a objetos.
+
+## 📦 Tabla de contenido
+- [Hola Mundo y Variables](#-hola-mundo-y-variables)
+- [Tipos de Datos](#-tipos-de-datos)
+- [Arreglos (Arrays)](#-arreglos-arrays)
+- [Funciones](#-funciones)
+- [Ciclos y Operadores](#-ciclos-y-operadores)
+- [Asincronía](#-asincronía)
+- [Programación Orientada a Objetos](#-programación-orientada-a-objetos)
+- [Cómo ejecutar](#-cómo-ejecutar)
+
+## 🌈 Hola Mundo y Variables
+```javascript
+console.log('hola  mundo feliz');
+let cajaDeAndy = 'woody';
+```
+Ejemplos de variables con `let` y `const` muestran cómo reasignar valores y declarar constantes.
+
+## 🧮 Tipos de Datos
+```javascript
+let nombre = 'edi';
+let edad = 25;          // Number
+let esMayorDeEdad = true; // Boolean
+let noHayValor = null;
+let simboloUnico = Symbol('unico');
+let numeroGrande = 2n;   // BigInt
+```
+Incluye también estructuras complejas como objetos y arreglos.
+
+## 📚 Arreglos (Arrays)
+### map & forEach
+```javascript
+const numbers = [1,2,3,4,5];
+const squareNumbers = numbers.map(num => num * num);
+numbers.forEach(n => console.log(n));
+```
+### filter & reduce
+```javascript
+const number = [1,2,3,4,5,6,7,8,9,10];
+const evenNumber = number.filter(n => n % 2 === 0);
+const sum = [1,2,3,4,5].reduce((acc, cur) => acc + cur, 0);
+```
+### Mutabilidad
+```javascript
+const countries = ['USA','CANADA','uk'];
+const newCountries = countries.push('Germany','Australia');
+const removeCountry = countries.pop();
+```
+### slice
+```javascript
+const animals = ['ant','bison','camel','duck','elephant'];
+console.log(animals.slice(2,4));
+```
+### spread
+```javascript
+const array1 = [1,2,3];
+const array2 = [4,5,6];
+const combined = [...array1, ...array2];
+```
+
+## 🧠 Funciones
+### Básicas
+```javascript
+function calculateDiscountePrice(price, discount){
+  const amount = (price * discount) / 100;
+  return price - amount;
+}
+```
+### Arrow Functions y enlace léxico
+```javascript
+const newGreetingImplicit = name => `Hi, ${name}`;
+const finctionalCharacterd = {
+  name: 'Uncle BEN',
+  messageWithArrowfuntion: msg => console.log(`${this.name} says: ${msg}`)
+};
+```
+### Closures
+```javascript
+function createCounter(){
+  let count = 0;
+  return () => { count++; console.log(count); };
+}
+```
+### Funciones puras
+```javascript
+function square(x){
+  return x * x;
+}
+function addTen(y){
+  return y + 10;
+}
+```
+
+## 🔁 Ciclos y Operadores
+```javascript
+for (let i = 0; i < list.length; i++) {
+  console.log(list[i]);
+}
+
+switch(expr){
+  case 'Papayas':
+    console.log('Los mangos y las papayas cuestan $20pesos el kilo');
+    break;
+}
+```
+
+## ⚡ Asincronía
+```javascript
+async function fectchDataAwait(){
+  try {
+    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
+    let data = response.json();
+    console.log(data);
+  } catch(error) {
+    console.log(error);
+  }
+}
+```
+También se incluye un ejemplo completo de `fetch` con peticiones **GET**, **POST** y **DELETE**.
+
+## 🧱 Programación Orientada a Objetos
+```javascript
+class Animal {
+  constructor(nombre,tipo){
+    this.nombre = nombre;
+    this.tipo = tipo;
+  }
+  emitirSonido(){
+    console.log('El animal emite un sonido');
+  }
+}
+class Perro extends Animal {
+  constructor(nombre,tipo,raza){
+    super(nombre,tipo);
+    this.raza = raza;
+  }
+  emitirSonido(){
+    console.log('El perro ladra');
+  }
+}
+```
+
+## ▶️ Cómo ejecutar
+1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
+2. Ejecuta un archivo con:
+   ```bash
+   node nombre-del-archivo.js
+   ```
+
+¡Explora, experimenta y diviértete aprendiendo JavaScript! 🥳
 
EOF
)
