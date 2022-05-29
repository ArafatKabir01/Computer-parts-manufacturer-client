import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>Q.1:How will you improve the performance of a React Application?</h1>
            <p>Ans: Keeping component state local where necessary.
                Memoizing React components to prevent unnecessary re-renders.
                Code-splitting in React using dynamic import'()'
                Windowing or list virtualization in React.
                Lazy loading images in React.</p>
            <h1>Q.2:What are the different ways to manage a state in a React application?</h1>
            <p>Ans: Another problem may come up when you're using useState where the new state to be set depends on the previous state (like our count example) or when state changes occur very frequently in our application.

                In these occasions, useState may provoke some unexpected and unpredictable behavior. In come reducers to solve this problem.

                A reducer is a pure function that takes the previous state and an action as an argument, and returns the next state. It's called a reducer because it's the same function type you could pass to an array: Array.prototype.reduce(reducer, initialValue).</p>
            <h1>Q.3:How does prototypical inheritance work?</h1>
            <p>Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            <h1>Q.4:What is a unit test? Why should write unit tests?</h1>
            <p>Ans:UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p><p>Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs.</p>
            <h1>Q.5:What are the different ways to manage a state in a React application?</h1>
            <p>Ans: Another problem may come up when you're using useState where the new state to be set depends on the previous state (like our count example) or when state changes occur very frequently in our application.

                In these occasions, useState may provoke some unexpected and unpredictable behavior. In come reducers to solve this problem.</p>
        </div>

    );
};

export default Blog;