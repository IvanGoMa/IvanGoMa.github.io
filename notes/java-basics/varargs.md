---
layout: note
title: Varargs (...)
---

# Varargs (...)

## What is it

Used in the parameters of a function signature to indicate a variable amount of arguments. Java internally converts the arguments to an array.

## Restrictions

There can only be one vararg in a function's signature and it must be the last parameter.

## How to use it
Adding 3 dots after the variable type for the desired parameter

```java
// This function will accept any numer of Strings. Varargs parameter added the last one.
public void randomFunction(int value1, int value2, String... names){

    // To access all names we iterate over it like we would do with an array
    for(String n: names){
        System.out.println(n);
    }
}


