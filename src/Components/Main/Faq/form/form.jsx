import React from 'react';

const Form =() => {
    return(
        <form className='my-4'>
            <div className='form-group'>
                <label for="Name">Name</label>
                <input type="text" className="form-control"/>
            </div>
            <div className='form-group'>
                <label for="Surname">Surname</label>
                <input type="text" className='form-control'/>
            </div>
            <div className='form-group'>
                <label for="message">Message</label>
                <textarea name="message" className='form-control'></textarea>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    )
}


export default Form;