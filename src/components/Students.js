import { useEffect, useState } from "react";
import icon from '../icon.png';

const Students = () => {
    // states
    const [students, setStudents] = useState( null );
    // const [ name, setName ] = useState('');
    // const [ age, setAge ] = useState('');
    // const [ email, setEmail ] = useState('');
    // const [ isPending, setIsPending ] = useState( false );


    useEffect( () => {
        fetch( 'http://localhost:8000/students' )
            .then( res => res.json() )
            .then( data => setStudents( data ) )
            .catch( err => console.error( err ) );

    }, []);

    console.log( document.querySelector('.all-students') );

    return ( 
        <div className="all-students">
            <h3>All the students in this class</h3>
            { students &&
                students.map( student => {
                    <div className="one-student">
                        <img src={ icon } alt="student icon"></img>
                        <div className="info">
                            <p>{ student.name }</p>
                            <p>{ student.age }</p>
                            <p>{ student.email }</p>
                        </div>
                    </div>
                })
            }
        </div>
     );
}
 
export default Students;