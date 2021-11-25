import React from 'react';
// import { useEffect, useState } from 'react';

const Form = () => {

    // handleSumbit
    const handleSubmit = ( e ) => {
        e.preventDefault();
        // const student = {
        //     name,
        //     age,
        //     email
        // };

        // console.log( student );
    }

    return (
        <div className="add-form">
            {/* <form>
                <input type="text" 
                placeholder="Enter student's full name."
                // value={ name }
                required
                onChange={ ( e ) => setName( e.target.value ) }
                />
                <input type="number" 
                placeholder="Enter student's age." 
                // value={ age }
                required
                onChange={ ( e ) => setAge( e.target.value ) }
                />
                <input type="email" 
                placeholder="Enter student's email address." 
                // value={ email }
                required
                onChange={ ( e ) => setEmail( e.target.value ) }
                />
            </form> */}

            {/* {!isPending && <button className="submit" onClick={ handleSubmit }>Add Student</button>}
            {isPending && <button className="submit" onClick={ handleSubmit } disabled>Adding...</button>} */}
        </div>
    )
}

export default Form;