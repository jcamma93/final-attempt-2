import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../services/api-service';


const Pizza = (props: PizzaProps) => {

    const [pizzaTime, setPizzaTime] = useState<{ message: string }>(null!);
    const navigate = useNavigate(); 
    useEffect(() => {
        apiService('/api/pizza')
        .then(data => setPizzaTime(data))
        .catch(() => navigate('/login'))
    }, []);


    return (
        <div>
            <h1 className='text-center display-1 text-secondary'>{pizzaTime?.message}</h1>
        </div>
    );
};

interface PizzaProps { }

export default Pizza;