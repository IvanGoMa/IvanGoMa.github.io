---
layout: note
title: Java Basics
---

# Proyecto tres en raya

## record

### Qué es

dataclass inmutable  
se accede a las propiedades con \<NombreClase\>.\<nombrePropiedad()

public record Position(int fila, int columna){}  
Position p \= new Position(1,2);  
int fila \= p.fila();

### Cuándo usar records

Cuando tienes objetos que:

* representan datos  
* son inmutables  
* no tienen lógica compleja  
* son “value objects”

Perfecto para:

* coordenadas  
* DTOs  
* respuestas API  
* eventos  
* movimientos  
* configuraciones

# Varargs(...)

### Qué es

Se usa en los parámetros de una función para indicar cantidad variable de argumentos. Java lo convierte en un array.

### Restricciones

Solo puede haber un Vararg y debe ser el último parámetro

# Por aprender

1. Lambdas  
2. Streams básicos(filter, map, forEach, toList)  
3. Method references(::)  
4. Streams avanzados
