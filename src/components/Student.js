import icon from '../icon.png';

const Student = () => {
    return ( 
        <div className="one-student">
            <img src={ icon } alt="student icon"></img>
            <div className="info">
                <p>Patkany Ecaterina</p>
                <p>17</p>
                <p>ecaterina.patkany@gmail.com</p>
            </div>
        </div>
     );
}
 
export default Student;
