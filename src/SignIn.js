import React, { useState } from 'react';

import Errors from './Errors';
import validate from './validator';

function SignIn() {

    const [user, setUser] = useState({
        username: { value: '', required: true, minLength: 2, errors: [] },
        // fullName: {value:'', required: true, pattern: /(\w.+\s).+/, errors: []},
        //email:    {value:'', required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        //errors: []
     // },
        password: {value:'', required: true,  passwordPattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, errors: []},
        // reTypePassword: {value:'', required: true, errors: []},
        rememberMe:  false
    });

    const onInputChange = (e) => {
        console.log(e.target.name, e.target.value);

        const newErrors = validate(
            e.target.name, 
            e.target.value, 
            user[e.target.name].required,
            user[e.target.name].minLength,
            user[e.target.name].pattern,
            user[e.target.name].passwordPattern
        );

        setUser({
            ...user,
            [e.target.name]: {
                ...user[e.target.name],
                value: e.target.value,
                errors: newErrors
            }
        });
    }

    const onSubmit = e => {
        e.preventDefault();
                
        for(const field in user){
            const newErrors = validate(
                field,
                user[field].value,
                user[field].required,
                //user[field].minLength,
                user[field].pattern
            );

            user[field] = {
                ...user[field],
                errors: newErrors
            };
        }

        setUser({...user});

        const rawUser = Object.keys(user)
                            .reduce((st, prop) => {
                                st[prop] = user[prop].value;
                                return st;
                            }, {});

        console.log(rawUser);
    }

    return (
        <div className="flex wrap bg-img">
  
  {/* Main */}
  <main role="main">
  <section id="sign in bg-img">  
   <div className="row pt-5">

   <div className="col-md-6"></div>
   <div className="col-md-6">
        <div className="alert alert-info pb-4" role="alert">
            <div className="container">
                <div className="text-center">
                    <h2 className="alert-heading">Sign In</h2>
                    
                </div>
                <hr />
                <form onSubmit={onSubmit}>
                    <div className="row">
                       
                            <div className="form-group col-md-12">
                                <label htmlFor="Username">Username</label>
                                <input type="Username" className="form-control" id="Username"
                                
                                name="username"
                                defaultValue={user.username.value}
                                onBlur={onInputChange}/>
                            </div>
                            {
                             <Errors errors={user.username.errors} />
                            }
                        
                            <div className="form-group col-md-12">            
                                <label htmlFor="Password">Password</label>
                                <input type="password" id="Password" className="form-control" aria-describedby="passwordHelpBlock"
                            
                               
                                name="Password"
                                defaultValue={user.password.value}
                                onBlur={onInputChange}/>

                            </div>
                            {
                            <Errors errors={user.password.errors} />
                            }

                                    <div className="form-check mb-4 mr-sm-2 mt-2 ml-3">
                                        <input className="form-check-input" type="checkbox" id="Remember me"/>
                                        <label className="form-check-label" htmlFor="Remember me">
                                        Remember me
                                        </label>
                                    </div>

                            <div class=" mb-3 col-sm-10"> 
                                <button type="submit" className="btn btn-outline-secondary">Sign in</button>
                            </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
        <div className="col-md-4"></div>
        </div>
        </section>    
</main>

</div>
    );
}

export default SignIn;

