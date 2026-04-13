import "./signup.css"
import leaf from '../assets/leaf.png'

function Signup(){
    return(
       
            
       
        <div className="form">
          <h1>Signup Page</h1>
          <img src={leaf} className="leaf top-left" />
          <img src={leaf} className="leaf bottom-right" />
            <form>
                <div className='field'>
                    <label>Name</label>
                <input type="text" />
                    </div>
                 <div className='field'>
                    <label>Email</label>
                <input type="text" />
                    </div>
                 <div className='field'>
                    <label>Password</label>
                <input type="password" />
                    </div>
            <div>
                <input type="Submit" />
                    </div>
            </form>
            </div>
    )

}
export default Signup