---
layout: note
title: Clean code
---

# Clean code

## What is it

Clean code is a philosophy and a set of principles that aim to make the code more readable, maintanable, testable and scalable. 

## Principles

### KISS | Keep It Simple, Stupid

Your code has to be understandable, so try to keep the structure as simple as possible while aiming for readability. Shorter doesn't mean simpler.

### DRY | Don't Repeat Yourself

Avoid code duplication whenever possible. If it's repeated, make a function. That makes the code simpler to read and mantain.

### SOLID

SOLID is a set of five principles itself, referencing OOP

#### Single Responsibility Principle

Every class and function must have a single purpose. 

#### Open/Closed Principle

Classes and interfaces should be open to extend but closed to modify. We can achieve this by using interfaces, abstract classes and inheritance. 

#### Liskov Substitution Principle

Child classes should be able to replace parent classes anywhere without affecting the application's performance. It's heavily related to the Open/Closed principle, if we inherit from a class is to add functionality, not modify the core of how it works.

#### Interface Segregation Principle

An Interface should be specific and well defined. It's better to split big interfaces into smaller units. The user should only be exposed to what it needs.

#### Dependency Inversion Principle

High-level modules should not depend on Low-level modules, both should depend on abstractions.

### Other rules

1. Follow the conventions and standards of your coding language
2. Names should be defining of the variable/function/class purpose
3. Use named constants instead of vague values
4. Comment the code when the naming is not explanatory enough
5. Separate business rules from implementation


