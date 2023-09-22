import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService, TOKEN_KEY } from '../services/api-service';

const Register = (props: RegisterProps) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');

    const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/auth/register', 'POST', { name, email, password })
            .then(token => {
                localStorage.setItem(TOKEN_KEY, token);
                navigate('/pizza');
            })
            .catch(() => console.log('oopsie doopsie!'));
    };

    return (
        <main className='container'>
            <section className='row justify-content-center'>
                <div className='col-12 col-md-4'>
                    <h1 className='text-center text-primary'>Register</h1>
                    <form className='form-group border rounded shadow p-4'>
                    <label className='text-primary' htmlFor="email">Name</label>
                        <input type='name'  className='form-control mb-2' value={name} onChange={e => setName(e.target.value)} />
                        <label className='text-primary' htmlFor="email">Email</label>
                        <input type='email' autoComplete='email' className='form-control mb-2' value={email} onChange={e => setEmail(e.target.value)} />

                        <label className='text-primary' htmlFor="password">Password</label>
                        <input type='password' autoComplete='current-password' className='form-control mb-2' value={password} onChange={e => setPassword(e.target.value)} />

                        <button onClick={handleRegister} className='btn btn-primary'>Register</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

interface RegisterProps { }

export default Register;