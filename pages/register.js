import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { register } from '../actions/auth';
import Layout from '../hocs/Layout';
import Loader from 'react-loader-spinner';

const registerPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const register_success = useSelector(state => state.auth.register_success);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const loading = useSelector(state => state.auth.loading);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    re_password: '',
  })

  const {
    first_name,
    last_name,
    username,
    password,
    re_password
  } = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();

    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(register(first_name, last_name, username, password, re_password));
  }

  if (typeof window !== 'undefined' && isAuthenticated)
    router.push('/dashboard')
  if (register_success)
    router.push('/login')

  return (
    <Layout
      title="httpOnly Auth | Register"
      content="Register page"
    >
      <h1 className="display-4">Register page</h1>
      <form className="bg-light p-5 mt-5 mb-5" onSubmit={onSubmit}>
        <h3>Create an account</h3>
        <div className="form-group">
          <label className="form-label mt-5" htmlFor='first_name'>
            <strong>First Name</strong>
          </label>
          <input 
            className="form-control"
            type="text"
            name="first_name"
            placeholder='First name'
            onChange={onChange}
            value={first_name}
            required/>
        </div>

        <div className="form-group">
          <label className="form-label mt-5" htmlFor='last_name'>
            <strong>Last Name</strong>
          </label>
          <input 
            className="form-control"
            type="text"
            name="last_name"
            placeholder='Last name'
            onChange={onChange}
            value={last_name}
            required/>
        </div>

        <div className="form-group">
          <label className="form-label mt-5" htmlFor='username'>
            <strong>Username</strong>
          </label>
          <input 
            className="form-control"
            type="text"
            name="username"
            placeholder='Username'
            onChange={onChange}
            value={username}
            required/>
        </div>

        <div className="form-group">
          <label className="form-label mt-5" htmlFor='password'>
            <strong>Password</strong>
          </label>
          <input 
            className="form-control"
            type="password"
            name="password"
            placeholder='Password'
            onChange={onChange}
            value={password}
            required/>
        </div>

        <div className="form-group">
          <label className="form-label mt-5" htmlFor='re_password'>
            <strong>Re password</strong>
          </label>
          <input 
            className="form-control"
            type="password"
            name="re_password"
            placeholder='Re password'
            onChange={onChange}
            value={re_password}
            required/>
        </div>

        {
          loading ? (
            <div className="d-flex justify-content-center align-items-center mt-5">
              <Loader
                type='Oval'
                color='#00bfff'
                width={50}
                height={50}
              />
            </div>
          ) :
          (
            <button 
              type="submit"
              className="btn btn-primary mt-5"
            >
              Register
            </button>
          )
        }

      </form>
    </Layout>
  )
}

export default registerPage;