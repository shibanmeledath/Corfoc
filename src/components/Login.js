import React, { useState, useEffect } from 'react';
import api from '../api/Api';
import { useNavigate, Link } from 'react-router-dom';
import Inputs from './Inputs';
import Forms from './Forms';
const Login = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState('');
  const [issuccess, setIssuccess] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (messages) {
      const timer = setTimeout(() => {
        setMessages('');
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [messages]);

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await api.post('/login', {
        email: data.email,
        password: data.password,
      });

      if (response.data.status === "Success") {
        setIssuccess(true);
        const user = response.data.data;  
        setMessages(response.data.message);
        sessionStorage.setItem('user',JSON.stringify(user));
        setTimeout(() => {
          navigate('/logined', { state: { user } });
        }, 1000);
      } else {
        setIssuccess(false);
        setMessages(response.data.message);
      }

    } catch (error) {
      setIssuccess(false);
      if (error.response && error.response.data && error.response.data.message) {
        setMessages(error.response.data.message);
      } else {
        setMessages("An error occurred during login.");
      }
    }
  };

  return (<>
   <Forms title={"Login"} issuccess={issuccess} messages={messages} onSubmit={handleSubmit} buttonName={"Login"}>
    {
      <>
        <Inputs 
        label={"Email"}
        name={"email"}
        type={"email"}
        value={data.email}
        onchange={handleOnChange}
        />
      <Inputs 
        label={"Password"}
        name={"password"}
        type={"password"}
        value={data.password}
        onchange={handleOnChange}
        />
      </>
    }
  </Forms>
  </>
  );
};

export default Login;
