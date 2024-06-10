import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '../atoms/atoms';
import axios from 'axios';

function Login() {
  const [userRole, setUserRole] = useRecoilState(userState);
  userRole;
  const navigator = useNavigate();

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const { username, password } = inputs;

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

  const onLogin = useCallback(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          method: 'get',
          url: '/api/users/' + username,
        });
        if (res.status === 200) {
          console.log('GET /api/users/', username, ' => ', res.data);
          localStorage.setItem('loginData', res.data.username);
          console.log('sucsses');
          setUserRole(res.data.userRole);
          navigator('/');
        }
      } catch (error) {
        alert('유저정보가 없습니다');
        console.log(error);
      }
    };

    fetchData();
  }, [username, password]);

  return (
    <div className='login' style={{ margin: '10px' }}>
      <div className='row d-flex justify-content-center align-items-center h-100'>
        <div className='col-md-9 col-lg-6 col-xl-6 my-lg-5 py-lg-5'>
          <img
            src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'
            className='img-fluid'
            alt='Sample image'
          />
        </div>
        <div className='col-md-8 col-lg-6 col-xl-5 offset-xl-1 my-lg-5 py-lg-5'>
          <form>
            <div className='form-outline mb-4'>
              <input
                type='username'
                name='username'
                id='form3Example3'
                className='form-control form-control-lg'
                placeholder='Enter username'
                onChange={onChange}
              />
              <label
                className='form-label'
                htmlFor='form3Example3'
                style={{ marginLeft: '0px' }}
              >
                Username
              </label>
              <div className='form-notch'>
                <div
                  className='form-notch-leading'
                  style={{ width: '9px' }}
                ></div>
                <div
                  className='form-notch-middle'
                  style={{ width: '81.6px' }}
                ></div>
                <div className='form-notch-trailing'></div>
              </div>
            </div>

            <div className='form-outline mb-3'>
              <input
                type='password'
                id='form3Example4'
                className='form-control form-control-lg'
                placeholder='Enter password'
                onChange={onChange}
              />
              <label
                className='form-label'
                htmlFor='form3Example4'
                style={{ marginLeft: '0px' }}
              >
                Password
              </label>
              <div className='form-notch'>
                <div
                  className='form-notch-leading'
                  style={{ width: '9px' }}
                ></div>
                <div
                  className='form-notch-middle'
                  style={{ width: '59.2px' }}
                ></div>
                <div className='form-notch-trailing'></div>
              </div>
            </div>

            <div className='d-flex justify-content-between align-items-center'>
              <div className='form-check mb-0'>
                <input
                  className='form-check-input me-2'
                  type='checkbox'
                  value=''
                  id='form2Example3'
                />
                <label className='form-check-label' htmlFor='form2Example3'>
                  Remember me
                </label>
              </div>
              <a href='#!' className='text-body'>
                Forgot password?
              </a>
            </div>

            <div className='text-center text-lg-start mt-4 pt-2'>
              <button
                type='button'
                className='btn btn-primary btn-lg'
                style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                onClick={onLogin}
              >
                Login
              </button>
              <p className='small fw-bold mt-2 pt-1 mb-0'>
                Don't have an account?{' '}
                <a href='#!' className='link-danger'>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
