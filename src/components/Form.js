import React from 'react'

const Form = () => {
    return (
        <div className="add-form">
            <form>
                <input type="text" placeholder="Enter student's full name." required/>
                <input type="number" placeholder="Enter student's age." required/>
                <input type="email" placeholder="Enter student's email address." required/>
            </form>
            <button className="submit">Add Student</button>
        </div>
    )
}

export default Form;