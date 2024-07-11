# Trabajo practico de variables - JavaScript

En este trabajo practico ponemos en practica algunos fundamentos de JavaScript, el lenguaje de programación para el desarrollo web.

## Contenidos

### 1. Variables

Las variables son contenedores para almacenar datos. En JavaScript, se pueden declarar variables utilizando `var`, `let` o `const`. Cada uno tiene sus propias características y usos específicos.

#### Ejercicio 1: Declaración y asignación de variables

- Declarar variables utilizando `let` y `const`.
- Asignar valores a las variables y mostrar esos valores en la consola.

#### Ejemplo

````javascript

```dotnetcli
let nombre = "Juan";
const edad = 25;

console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
````

### 2. Condicionales

#### Ejemplo

Ejemplo 1: Condicional simple con if


```dotnetcli
let edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
}
```

Ejemplo 2: Condicional con if...else


```dotnetcli
let hora = 10;

if (hora < 12) {
    console.log("Buenos días.");
} else {
    console.log("Buenas tardes.");
}
```

Ejemplo 3: Condicional con if...else if...else

```dotnetcli
let nota = 85;

if (nota >= 90) {
    console.log("Sobresaliente.");
} else if (nota >= 70) {
    console.log("Notable.");
} else if (nota >= 50) {
    console.log("Aprobado.");
} else {
    console.log("Reprobado.");
}
```

### 3. Bucles

#### ejemplos

Ejemplo 1: Bucle while


```dotnetcli
et i = 10;
while (i > 0) {
    console.log(i);
    i--;
}
```

Ejemplo 2: Bucle do...while


```dotnetcli
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
```

