export default function App() {
  return (
    <>
      <div className="login-page">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>

        <div className="login-container">
          <h1>Welcome back</h1>
          
          <div className="input-box"> 
            <span>✉</span>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <span>🔒</span>
            <input type="password" placeholder="Password" required/>
            <small>Show</small>
          </div>
          <p className="forgot">Forgot Password?</p>
          <button className="login-btn">Log in</button>

          <div className="or">
            <span></span>
            or
            <span></span>
          </div>
          <button className="social google"> 🌈 Login with Google</button>
          <button className="social facebook">📖 Login with Facebook</button>
        </div>
      </div>
    </>
  );
}
