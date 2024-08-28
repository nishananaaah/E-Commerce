import React from 'react'

const Register2 = () => {
  return (
    <div>
        <form>
            <div>
                <label>Username</label>
                <input type="text"
                name='username'
                placeholder='username'
                autoComplete='off'
                />
            </div>
            <div>
                <label>Email</label>
                <input type="text"
                name='email'
                placeholder='email'
                autoComplete='off'
                />
            </div>
            <div>
                <label>Password</label>
                <input type="password"
                name='password'
                placeholder='*********'
                
                />
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password"
                name='confirmPassword'
                placeholder='********'
            /></div>
            <button type='login'>Log in</button>
       </form>
      
    </div>
  )
}

export default Register2
