import React, {useContext, useEffect, useState} from 'react';
import "./auth.css"
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import {AuthContext} from "../../context/AuthContext";

const SignIn = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token, data.userId)
    } catch (e) {}
  }

  return (
    <div className="row center-block valign-wrapper auth__wrapper">
      <div className="col s6 offset-s3">
        <div className="card">
          <div className="card-content">
            <div className="input-field">
              <input id="email"
                     type="text"
                     className="validate"
                     name="email"
                     onChange={changeHandler}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input id="password"
                     type="password"
                     className="validate"
                     name="password"
                     onChange={changeHandler}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="card-action red accent-4 center">
            <button className="btn red lighten-2 hoverable"
                    onClick={loginHandler}
                    disabled={loading}
            >
              Sign in
            </button>
            <a href="/auth/signup">Create account</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
