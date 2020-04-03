# React: Code Splitting

Some of the headings have a bracketed index to remind me what part of the code corresponds to that section. This progression can be seen in the commits, too.

- There will be a primer and a demonstration.
- We will be using the React 16.8 API.
- We will be working with functional components only.
- We will assume Create React App boilerplate.

# What it is - [[1](https://github.com/tzohpilotl/react-code-splitting/commit/5b4677618109986265a11f5994a4c0dcf50f8a59)]

React is a JavaScript library for building user interfaces. React is not a framework; it needs companion libraries to be fully usable.

React (prefers) takes a declarative approach to building user interfaces. React also uses a tree model to describe relationships between elements and it has an optional syntax that makes the inspiration it took from HTML, which is a declarative language, very clear.

React is agnostic to the environment it is going to be rendered in, it delegates that responsibility to a second library (like `react-dom`).

Data in React, in general, flows one way: down the component tree, from parents to their children.

# JSX

JSX is a special syntax that allows developers to easily write components in a familiar syntax because it looks a lot like plain HTML.

JSX isn't a part of the JavaScript specification, so a transpiler should be set in place in order to use it. I used the Babel plugin for Webpack for this session, which is configured out of the box in Create React App. If you don't want to have this extra configuration you can use the plain JavaScript interface.

**Fact:** React always has to be in the scope (`import React from 'react'`) when using JSX because it compiles to `React.createElement` calls.

# Elements vs Components - [[2](https://github.com/tzohpilotl/react-code-splitting/commit/f8585a9fd15b6400195af0bc25284e4f94ae6c1f)]

## Elements

An element is a mapping to an HTML tag and, accordingly, its name starts with a lowercase character. React elements have the same interface than DOM elements, except for the `class` attribute which is renamed `className` in React because `class` is a _future reserved word_ in JavaScript.

## Components

A component is an abstraction which can be either an element or a tree of components.

# Components and Props - [[3](https://github.com/tzohpilotl/react-code-splitting/commit/6cdac57e856f0dbe27b6c0aa004f031cedabe949)],[[4](https://github.com/tzohpilotl/react-code-splitting/commit/7b896a29cc1ed36181572441b1162cee77b9e78d)]

React components expose an extended API called props. This API lets parent components pass arbitrary data to their children components.

**Fact:** A unique key prop is necessary for every element in a list generated programmatically.

# Hooks - [[5](https://github.com/tzohpilotl/react-code-splitting/commit/38f877154f8773470a0163f04661ef537e493f7b)],[[6](https://github.com/tzohpilotl/react-code-splitting/commit/0795eeeae87fbad20f3fbf9f50fc357cff67c1f8)]

Hooks are functions that let the developer _hook into_ React state and lifecycle features from function components.

## Motivation

- It's hard to reuse stateful logic between components
- Complex components become hard to understand. This is more common inside class components where lifecycle methods divide related code and group unrelated code e.g. when a component manages a subscription, it is necessary to subscribe inside the `componentDidMount` method, potentially next to unrelated operations on the component's state, and unsubscribe inside the `componentWillUnmount` method
- Classes confuse both people and machines
  - `this`
  - Verbosity and binding
  - When to use functions and when to use classes. This is a common cause of dissent even in somewhat experienced teams

# Higher-Order Components - [[7](https://github.com/tzohpilotl/react-code-splitting/commit/0795eeeae87fbad20f3fbf9f50fc357cff67c1f8)]

A Higher-Order Component or HOC is a function that takes a component and also returns a component. This is not a feature of React but a pattern enabled by React composability.

This serves the purpose of reusing and composing logic by wrapping a component with a container component.

# Code Splitting - [[8](https://github.com/tzohpilotl/react-code-splitting/commit/81001e1c4e0e6e0a2577b0e2b3d5d257fdc8591e)]

## JavaScript

JavaScript has some features that enabled code splitting.

- Modules
- Dynamic routes

## React

React encourages early code splitting by providing easy to use utilities.

- `React.lazy`: Knows how to deal with asynchronous imports that resolve to a module with a React component as the default export.
- Suspense: A component to define the UI while `React.lazy` calls are pending.

# Random notes

Imagine you want to create a static page with React. Since React uses a tree model, same as HTML, to describe relationships between elements and components, the only thing you need to do to create your static site is making React provide a correct HTML document. The React API has the `createElement` method which is always composed with other calls to `createElement` on its children argument to create trees.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
