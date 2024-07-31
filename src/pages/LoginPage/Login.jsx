import React, { useEffect, useState } from 'react';
import styles from './Login.module.css';
import loginImage from './log.png';
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [formState, setFormState] = useState('sign in');
  const [userData,setUserData] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const gotoNewPage = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    navigate("/Home");
  };

  const toggleForm = () => {
    setFormState(formState === 'sign in' ? 'sign up' : 'sign in');
  };

  useEffect(() => {
    const fetchAndAddDataInUserData = async () => {
      try{
        const response = await fetch('https://66a0dcd07053166bcabd259b.mockapi.io/userData');
        const data = await response.json();
        setUserData(data);
      }catch{
        console.log('error in fetch or add data in api');
      }
    };
    fetchAndAddDataInUserData();
  },[]);

  // -------------------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
  
    try {
      if(formState === 'sign in'){
        const user = userData.find(user => user.email === email && user.password === password);
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          gotoNewPage(e);
        }else{
          alert('Invalid User Name and Password');
        }
      }else{
        // Send POST request to the API
        const response = await fetch('https://66a0dcd07053166bcabd259b.mockapi.io/userData', {
          method: 'POST', // Specify the HTTP method
          headers: {
            'Content-Type': 'application/json', // Specify the content type
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });
    
        if (response.ok) {
          // Handle successful registration
          const data = await response.json();
          setName('');
          setEmail('');
          setPassword('');
        } else {
          // Handle errors
          console.error('Registration failed:', response.statusText);
        }
      }
    } catch (err) {
      // Handle errors
      console.error('Registration failed. Please try again.', err);
    }
  };


  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <img src={loginImage} alt="Fashion Models" />
        </div>
        
        <div className={styles.formSection}>
          {formState === 'sign in' ? (
            <>
              <h2>Sign In</h2>
              <p>Sign in to continue shopping</p>
              <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className={styles.rememberForgot}>
                  <label>
                    <input type="checkbox" /> Remember Me
                  </label>
                  <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" className={styles.submitButton}>Sign In</button>
              </form>
              <p>Don't have an account? <button className={styles.signupbtn} onClick={toggleForm}>Sign Up</button></p>
            </>
          ) : (
            <>
              <h2>Sign Up</h2>
              <p>Sign Up to continue shopping</p>
              <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label htmlFor="userName">Name</label>
                  <input type="text" id="userName" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className={styles.submitButton}>Sign Up</button>
              </form>
              <p>Go to Login <button className={styles.signupbtn} onClick={toggleForm}>Sign In</button></p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
