import arrow from '../images/icon-arrow.svg';
import { useState } from 'react';

const Main = () => {
    
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (e) =>{
        const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        e.preventDefault();

        if(submit){
            setSubmit(false);
        }

        if(!validEmail){
            setError(true);
        }else{
            setError(false);
            setEmail('');
            setSubmit(true);
        }

    }

    const handleEmail = ({target}) => {
        setEmail(target.value);
        setSubmit(false);
    }

    return ( 
        <div className="main-container">
            <h1 className="title">
                <p className="were">We're</p>
                <p className="">coming</p>
                <p className="">soon</p>
                
            </h1>
            <p className="subitle">
                Hello fellow shoppers! We're currently building our new fashion store. 
                Add your email below to stay up-to-date with announcements and our launch deals.
            </p>
            
            <form onSubmit={handleSubmit} className='form-container'>
                <input onChange={handleEmail} type="text" name="email" value={email} className={`input ${error ? 'ativeError':'inativeError'}`} placeholder='Email Address'/>
                <button type="submit" className='btn'>
                    <img src={arrow} alt="arrow" />
                </button>
            </form>
            { error && <p className='msgError'>Please provide a valid email</p>}
            { submit && <p className='msgSuccess'>We're counting on you!</p>}
           
        </div>
     );
}
 
export default Main;
