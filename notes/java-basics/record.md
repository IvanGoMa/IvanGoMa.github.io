---
layout: note
title: Record
---

# Record

## What is it

Java keyword. Used instead of `class` to create a class where all attributes are `private final`.

## How to use it
We only need to write the constructor signature. It internally generates all the properties as `private final`, makes the assignements, and generates the getters an the methods `toString()`,`equals()` and `hashCode()`. The getters method names are equal to the name of the property, the don't conatain the word "get".

```java
// Defining the record
public record Position(int row, int column) {}

// Creating an instance
Position p = new Position(1, 2);

// Accessing its values
int row = p.row();
```

## When to use records

When you need and object that:

- Represents data
- Is final
- Doesn't need complex logic

Perfect for:

- Coordinates
- DTOs
- Configurations