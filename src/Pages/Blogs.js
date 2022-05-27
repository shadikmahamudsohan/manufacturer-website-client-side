import React from 'react';

const Blogs = () => {

    return (
        <div className='p-10 rounded-3xl shadow-xl mx-auto my-12 lg:w-1/2 sm:w-full'>
            <div className="my-5">
                <h1 className="card-title">1. How will you improve the performance of a React Application?</h1>
                <p className="text-md"><strong>Ans: </strong>
                    To improve the performance of a react application I will try to optimize my code.I will create hooks for the information that I will need to use in another component.It will improve it's performance because I am running less code. I will optimize the dependency in my components. Try to Avoid using index as Key for map. There are many more ways to improve the performance of a React Application.
                </p>
            </div>
            <div className="my-5">
                <h1 className="card-title mt-5">2. What are the different ways to manage a state in a React application?</h1>
                <p className="text-md"><strong>Ans: </strong>
                    There are 4 ways to manage a state in a React application.They are 1. Local state, 2. Global state, 3. Server state, 4. URL state.When we need to change a data in the component like useSate.Global state is used for authenticated user state.The server state is used for sending data to a server.The URL state are state that is used to show data that exists in URLs.
                </p>
            </div>
            <div className="my-5">
                <h1 className="card-title mt-5">3. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                <p className="text-md"><strong>Ans: </strong>
                    useSate is a react hooks to change a specific part of a component.React state give you to items.One is a variable and the other is a function which is used to change the state.We write the function as set because it set the value of the const variable.If we set the value directly to the variable (product) it will give a error "Assignment to constant variable". That is why we use the function (setProduct).
                </p>
            </div>
            <div className="my-5">
                <h1 className="card-title mt-5">4. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p className="text-md"><strong>Ans: </strong>
                    There are many way to find a value from a array.There is a hard to way to find the value of the array.I can use for loop to find all data form the array and then use a condition to find the data I want.But there is a simple way to do that.I will use array.find() method.The array.find method need a function and a condition that will loop throw all the data and find the data you need. So to find the name of my product I will use <strong>array.find(product ={'>'} product === name)</strong>. I will get the name that is am searching form a input field.
                </p>
            </div>
            <div className="my-5">
                <h1 className="card-title mt-5">5. What is a unit test? Why should write unit tests?</h1>
                <p className="text-md"><strong>Ans: </strong>
                    Unit test is testing every unit of the code to see if there are any issues. It see the smallest testable module of an application. It is done when the developer stop his development. We should write unit test because it is safe to find the bug first before then after development. If proper unit testing is done in early development, then it saves time and money in the end. That is why we should write unit tests.
                </p>
            </div>
        </div>
    );
};

export default Blogs;