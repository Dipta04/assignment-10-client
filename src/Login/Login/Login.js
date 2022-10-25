import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const [error, setError] = useState('');
    const {signIn,setLoading,providerLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location =useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) =>{
              event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            if(user)
            {
                navigate(from, {replace: true});
            }
            else
            {
              toast.error('You are not a registered user.Please register and then login');
            }
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
        .finally(() =>{
            setLoading(false);
        })
    }

    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    const handleGitHubSignIn=()=>{
        providerLogin(gitProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            
            <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />

                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Text className="text-danger">
                        {error}
                </Form.Text><br/>

                <Button variant="outline-primary" type="submit">
                    Sign In
                </Button><br></br>
                <h5 className='my-3 text-warning'>New at this website.Please Register first!!</h5>
                <Link to='/register'> <Button variant="outline-primary">Register</Button></Link>
                <div className='mt-2'>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-success"><FaGoogle></FaGoogle> Sign in with Google</Button><br/>
                <Button onClick={handleGitHubSignIn} variant="outline-secondary"><FaGithub></FaGithub> Sign in with GitHub</Button>
                </div>
            </Form>

        </div>
    );
};

export default Login;