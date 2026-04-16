import "./login.css"
import leaf from '../assets/leaf.png'

function Login(){
    return(
       
            
       
        <div className="form">
          <div className="login">
            <h1>Login Page</h1>
          </div>
          <img src={leaf} className="leaf top-left" />
          <img src={leaf} className="leaf bottom-right" />
            <form>
                <div className='field'>
                    <label>Name</label>
                <input type="text" />
                    </div>
                 <div className='field'>
                    <label>Password</label>
                <input type="password" />
                    </div>
            <div>
                <button type='submit'>Submit</button>
                    </div>
            </form>
            </div>
    )

}
export default Login