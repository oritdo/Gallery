//import React from 'react';

import React, { useState } from 'react';

import Errors from './Errors';
import validate from './validator';

function SignUp() {
  const [user, setUser] = useState({
    // fullname: {
    //   value: "",
    //   required: true,
    //   namepattern: /^((\b[a-zA-Z]{2,40}\b)\s*){2,}$/,
    //   errors: []
    // },
    username: {
      value: "",
      required: true,
      minLength: 2,
      errors: []
    },
    email: {
      value: "",
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errors: []
    },
    password: {
      value: "",
      required: true,
      passwordPattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      errors: []
    },
    confirmpassword: {
      value: "",
      required: true,
      errors: []
    },
    //rememberme: { required: false }
  });

  const onInputChange = (e) => {
    console.log(e.target.name, e.target.value);

    // const newState = {
    //     ...student
    // };

    // newState[e.target.name] = e.target.value;

    const newErrors = validate(
      e.target.name,
      e.target.value,
      user[e.target.name].required,
      user[e.target.name].minLength,
      user[e.target.name].pattern,
      //   user[e.target.name].namepattern,
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
  };

  const onConfirmPassword = (e) => {
    const newErrors = [];

    if (!user.confirmpassword.value) {
      if (e.target.value !== user.password.value) {
        newErrors.push(`Re typed password does not match the password.`);
      }
    }
    setUser({
      ...user,
      confirmpassword: {
        ...user.confirmpassword,
        value: e.target.value,
        errors: newErrors
      }
    });

    return newErrors;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    for (const field in user) {
      const newErrors = validate(
        field,
        user[field].value,
        user[field].required,
        user[field].minLength,
        user[field].pattern,
        user[field].namepattern,
        user[field].passwordPattern
      );

      user[field] = {
        ...user[field],
        errors: newErrors
      };
    }

    setUser({ ...user });

    const rawUser = Object.keys(user).reduce((us, prop) => {
      us[prop] = user[prop].value;
      return us;
    }, {});

    console.log(rawUser);
  };


  return (
    <div className="container-fluid bg-img">

      {/* Main */}
      <main role="main">
        <section id="sign up">
          <div className="row">
            <div className="alert alert" role="alert">
              <div className="container-fluid mt-5 col-md-10 pl-4 mr-5 signUp">
                <div className="text">
                  <h2 className="alert-heading pl-3 pt-3 text-info">Sign Up</h2>
                  <h5 className="alert-heading pl-3 text-info">Please fill in this form to create an account!</h5>
                </div>
                <hr></hr>
                <form onSubmit={onSubmit}>

                  <div className="form-group  col-md-8">
                    <label htmlFor="Username">Username</label>
                    <input type="Username" className="form-control" id="Username"

                      name="username"
                      defaultValue={user.username.value}
                      onBlur={onInputChange} />
                  </div>
                  {
                    <Errors errors={user.username.errors} />
                  }

                  <div className="form-group col-md-8">
                    <label htmlFor="Email">Email</label>
                    <input type="Email" className="form-control" id="Email"


                      name="email"
                      defaultValue={user.email.value}
                      onBlur={onInputChange} />
                  </div>
                  {
                    <Errors errors={user.email.errors} />
                  }

                  <div className="form-group col-md-8">
                    <label htmlFor="Password">Password</label>
                    <input type="password" id="Password" className="form-control" aria-describedby="passwordHelpBlock"


                      name="password"
                      defaultValue={user.password.value}
                      onBlur={onInputChange} />


                    <small id="passwordHelpBlock" className="form-text text-muted">
                      Your password must be at least 6 characters long, contain Lower and Upper case characters and  also numbers.
                                </small>
                  </div>
                  {
                    <Errors errors={user.password.errors} />
                  }

                  <div className="form-group col-md-8">
                    <label htmlFor="Re-type password">Re-type password</label>
                    <input type="Re-type password" id="Re-type password" className="form-control" aria-describedby="Re-type password"


                      name="confirmpassword"
                      defaultValue={user.confirmpassword.value}
                      onBlur={onConfirmPassword} />


                    <small id="passwordHelpBlock" className="form-text text-muted">
                      The content here will be the same as the content of the password
                                </small>

                  </div>
                  {
                    <Errors errors={user.confirmpassword.errors} />
                  }
                  <div className="form-check pl-3">
                    Categories that interest me:
    </div>
                  <div className="form-check form-check-inline mt-2 pl-3">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Abstract</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Still Life</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Flowers</label>
                  </div>
                  <div>
                    <div className="form-check form-check-inline pl-3">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue="option2" />
                      <label className="form-check-label" htmlFor="inlineCheckbox2">Landscapes</label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue="option2" />
                      <label className="form-check-label" htmlFor="inlineCheckbox2">characters</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue="option2" />
                      <label className="form-check-label" htmlFor="inlineCheckbox2">Pop-Art</label>
                    </div>
                  </div>
                  <div className="mt-4 pl-3 pb-4">
                    <button type="submit" className="btn btn-info mx-auto card-button">Submit</button>
                    <button type="button" className="btn btn-outline-info ml-2 delete-button">Delet selected Tags</button>
                  </div>


                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignUp;
