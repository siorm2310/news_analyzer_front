import React from 'react'

function LoginForm() {
  return (
    <div className="login-form">
    <form>
      <h1>Welcome to News Analyzer</h1>
      <div className="content">
        <div className="input-field">
          <input type="email" placeholder="Email" autoComplete="nope"/>
        </div>
        <div className="input-field">
          <input type="password" placeholder="Password" autoComplete="new-password"/>
        </div>
      </div>
      <div className="action">
        <button className='btn'>Sign in</button>
      </div>
    </form>
  </div>
  )
}

export default LoginForm