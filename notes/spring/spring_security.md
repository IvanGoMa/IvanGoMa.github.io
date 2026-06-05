---
layout: note
title: Spring Security + JWT
---

# Spring Security + JWT

## What are they

Spring Security is part of the Spring framework that helps create secure applications. JWT stands for JSON Web Token and is the standard we use to validate a user request. Together they allow us to ensure that a request was sent by the right registered user and that it hasn't been intercepted and modified.

## JWT

### Structure

A JWT has three parts: header, payload and signature.

The header specifies the token type (JWT in this case), and the algorithm used to create the signature.

The payload's main function is to tell us who sent the request and their role/permissions. It contains the user and token information.

The signature is the most important part of the token. It's generated using the header and payload's information and encrypting it using a secret key.

### What does it accomplish

It ensures that the claims (the payload info) the token has are trusted. We can customize the claims, but typical ones are username, role and expiration time of the token.

### How does it accomplish it

As stated before we generate the signature encrypting the header and the payload with a secret key. This means if someone tried to change the claims, the payload information, it would then need to generate a new signature so that the token would be valid. And in order to generate a valid signature it would need the secret key.

That way only someone with the secret key can generate and validate rightful tokens.

### Why using JWT when building REST APIs

Because it allows stateless authentication. The token is sent in every request, and ensures it's made by a registered user. That way the server doesn't need to create and store a session, it doesn't need to keep track of active users on the database and it doesn't need to share a session state between all servers with our application, which highly improves scalability.

## Spring Security

It's a framework that handles authorization and authentication in Spring. In other words it controls who the user is and what they can do. In a REST API context it's the agent validating the JWTs. From now on I'll focus exclusively on it's usage on REST APIs.

### Filter Chain

Spring Security intercepts all requests our application receives and sends them through a security filters chain before they reach the Controller. If the request is not valid for any of the filters it will be blocked and return an error. Once it successfully passes all filters the JWT's claims are stored in the Security Context Holder.

### Security Context Holder

Allows all layers (controller, service...) to access the claims from the JWT. This is what enables authorization. Some endpoints are only usable if a certain role is stored in the context holder. Or we can make a function work on the user stored in the context holder (for example change username).

### How is it used

To generate and validate JWTs, Spring Security needs a Database with a "users" table to validate authentication (and authorization if we have a role field). The User Entity needs to implement the UserDetails interface. Our user repository must implement JpaRepository in order to allow Spring Security to use Spring Data JPA to search users. It also uses UserDetailsService interface 

### Layers

These are all the layers i used to implement Spring Security

#### Pom.xml

Adding all necessary dependencies

#### Application.properties

Contains the expiration time of the JWTs and the secret key used to create the signature (in environment variables, not visible)

#### User entity

Implementing UserDetails so that SpringSecurity can use it to authenticate.

#### Repository

Implementing JpaRepository

#### JwtService

Logic to generate and validate tokens and to extract the claims

#### JwtFilter

First filter of the chain. Checks if the request has a jwt and validates it with JwtService. If it's valid stores claims in SecurityContextHolder

#### ApplicationConfig

Defines 2 beans necessary for authentication.

1. Returns a password encoder to encode and validate passwords
2. Returns a authentication provider. It's the responsible to check if the password given is correct when logging in

#### SecurityConfig

Establishes the security rules of our app. For a REST API we need to make it stateless. Here we can define which endpoints are public (don't need jwt) and which ones do. It's important for register and login endpoints to be public. We also need to pass it the authentication provider to have it available in our service layer as AuthenticationManager.

#### AuthService

Service layer for register and login endpoints. Needs password encoder to save encoded passwords in the database, JwtService to return tokens and the AuthenticationManager.

#### AuthController

Authentication endpoints.