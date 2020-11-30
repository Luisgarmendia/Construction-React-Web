import axios from 'axios';
const PORT = process.env.REACT_APP_API_URL;

export const setCheckedAssistence = (projectID,employees,history) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        console.log(projectID)
        console.log(employees)
        var UserID = localStorage.getItem('tcpUserID');
        axios.post(PORT + `/project/checkAssistence`,{
            projectID:projectID,
            employeeList: employees,
        } )
        .then((res) => {
            history.push('/');
            return resolve(res.data.data);
        })
        .catch((err) => {
            if(err.response && err.response.data)
                return reject(err.response.data)
                
            else
                return reject({error: true, message: "hubo un problema mi ciela"})
        })
    })
}