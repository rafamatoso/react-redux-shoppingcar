import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { authLogin } from '../../store/fetchActions';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });

  const dispatch = useDispatch();

  function changeForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function submitForm(e) {
    e.preventDefault();
    dispatch(authLogin(form));
    setForm({ username: '', password: '' });
  }

  return (
    <form onSubmit={submitForm} style={{ width: 350, margin: '40px auto' }}>
      <h2 className="text-center">SC-Login</h2>
      <div className="form-group">
        <input
          placeholder="Usuário"
          name="username"
          className="form-control"
          onChange={changeForm}
          value={form.username}
        ></input>
      </div>
      <div className="form-group">
        <input
          placeholder="Senha"
          name="password"
          className="form-control"
          type="password"
          onChange={changeForm}
          value={form.password}
        ></input>
      </div>
      <div className="form-group">
        <button className="btn btn-primary btn-block">Logar</button>
      </div>
    </form>
  );
}
