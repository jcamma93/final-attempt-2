import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService, TOKEN_KEY } from '../services/api-service';
import { Link } from 'react-router-dom';

const Login = (props: LoginProps) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/auth/login', 'POST', { email, password })
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
                    <form className='form-group border rounded shadow p-4'>
                        <label htmlFor="email">Email</label>
                        <input type='email' autoComplete='email' className='form-control mb-2' value={email} onChange={e => setEmail(e.target.value)} />

                        <label htmlFor="password">Password</label>
                        <input type='password' autoComplete='current-password' className='form-control mb-2' value={password} onChange={e => setPassword(e.target.value)} />

                        <button onClick={handleLogin} className='btn btn-primary'>Login</button>
                        <br />
                        <br />
                        <Link to={'/register'} className='text-dark'>Register Here!</Link>
                    </form>
                </div>
            </section>
        </main>
    );
};

interface LoginProps { }

export default Login;