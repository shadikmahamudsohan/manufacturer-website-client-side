import React from 'react';

const Blogs = () => {
    return (
        <div className='card shadow-xl mx-auto mt-12 lg:w-1/2 sm:w-full'>
            <div className="card-body">
                <h1 className="card-title"> How will you improve the performance of a React Application?</h1>
                <p className="text-md"><strong>Ans: </strong>
                    To improve the performance of a react application I will try to optimize my code.I will create hooks for the information that I will need to use in another component.It will improve it's performance because I am running less code. I will optimize the dependency in my components. Try to Avoid using index as Key for map. There are many more ways to improve the performance of a React Application.
                </p>
                <h1 className="card-title mt-5">What are the different ways to manage a state in a React application?</h1>
                <p className="text-md"><strong>Ans: </strong>
                    There are 4 ways to manage a state in a React application.They are 1. Local state, 2. Global state, 3. Server state, 4. URL state.When we need to change a data in the component like useSate.Global state is used for authenticated user state.The server state is used for sending data to a server.The URL state are state that is used to show data that exists in URLs.
                </p>
                <h1 className="card-title mt-5">What are the different ways to manage a state in a React application?</h1>
                <p className="text-md"><strong>Ans: </strong>
                    There are 4 ways to manage a state in a React application.They are 1. Local state, 2. Global state, 3. Server state, 4. URL state.When we need to change a data in the component like useSate.Global state is used for authenticated user state.The server state is used for sending data to a server.The URL state are state that is used to show data that exists in URLs.
                </p>
            </div>
        </div>
    );
};

export default Blogs;