import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import studentRequest from '../requests/student-request';
import { useNavigate } from 'react-router-dom';

const AddUpdate = () => {
    const history = useHistory();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [userOptions, setUserOptions] = useState([]);
    const [target, setTargets] = useState({
        name: "",
        email: "",
        department: "",
        mobile: 0,
        address: ""
    });
    const [errors, setErrors] = useState([]);
    const handleOnchange = e => {
        const { name, value } = e.target;
        setTargets(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const onSubmit = () => {
        setIsLoading(true);
        
            studentRequest
                .store({
                    ...target,
                })
                .then(() => navigate('/'))
                .catch(err => {
                    setErrors(err);
                    setIsLoading(false);
                });
    };
    const onChangeSearchSelect = (e) => {
        setTargets(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    console.log(target);
    return(
        <>
        Name: <input type="text" name="name" onChange={handleOnchange} value={target.name}/><br/>
        Email: <input type="email" name="email" onChange={handleOnchange} value={target.email}/><br/>
        Department:    
        <select name="department" id="departments" onChange={onChangeSearchSelect}>
            <option value="mechanical">mechanical</option>
            <option value="electrical">electrical</option>
            <option value="computers">computers</option>
            <option value="electronics">electronics</option>
            <option value="civil">civil</option>
            </select><br/>
        {/* Department: <input type="text" name="department" onChange={handleOnchange} value={target.department}/><br/> */}
        Mobile: <input type="tel" name="mobile" onChange={handleOnchange} value={target.mobile}/><br/>
        Address: <input type="text" name="address" onChange={handleOnchange} value={target.address}/><br/>
        <button onClick={onSubmit}>Add Student</button>
        </>
    )
}
export default AddUpdate;