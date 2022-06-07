import {React} from 'react'


function LoginForm() {
  
  const tryToAuthenticate = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const response = await fetch("http://localhost:3000/login",{
      method : "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username : data.get('username'),
        password : data.get('password')
      }),
    })

    const token = await response.json()
  }  

  return (
    <div className="login-form">
    <form onSubmit={tryToAuthenticate}>
      <h1>Welcome to News Analyzer</h1>
      <h2>Let's see if we know each other</h2>
      <div className="content">
        <div className="input-field">
          <input type="text" placeholder="Username" id='username' name='username' autoComplete="nope" required/>
        </div>
        <div className="input-field">
          <input type="password" placeholder="Password" id='password' name='password' autoComplete="new-password" required/>
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