import * as React from 'react';

const Home = ( props: HomeProps) => {
    return (
        <div>
            <h1 className='text-center display-1'>Welcome to my bookstore!</h1>
        </div>
    );
};

interface HomeProps {}

export default Home;