import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../assets/img/loading.gif';
import StudentRequest from '../../src/requests/student-request'
import querystring from 'query-string';
import { useHistory } from 'react-router';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    const navigate = useNavigate();
    const [students, setStudents] = useState(null);
    const [page, setPage] = useState(1);
    useEffect(()=>{
    StudentRequest.index({
        page
    }).then(response => {
            setStudents(response);
    });
},[]);

const redirect = () => (
    navigate('/add')
)
    
    return (
        <section className="content">
            {console.log(students)}
           {students &&
           students.results.map(student => (
            <>
            <h1>{student.id}</h1>
            <h2>{student.name}</h2>
            <h3>{student.email}</h3>
            <h3>{student.department}</h3>
            <h3>{student.mobile}</h3>
            <h3>{student.address}</h3>
            </>
            
           ))}
           <button onClick={redirect}>Add Student</button>
        </section>
    );
};

export default Home;
