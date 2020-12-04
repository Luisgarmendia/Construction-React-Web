import axios from 'axios';
const PORT = process.env.REACT_APP_API_URL;
const calculateDifHour= (start_time,end_time)=>{
    const start_hour = parseInt(start_time.split(':')[0],10);
    const start_minute = parseInt(start_time.split(':')[1],10);
    const end_hour = parseInt(end_time.split(':')[0],10);
    const end_minute = parseInt(end_time.split(':')[1],10);
    let Difhour= end_hour-start_hour;
    let Difminute=end_minute-start_minute;
    if (Difminute<0){
        Difhour--
        Difminute=60+Difminute
    }
    return parseFloat((Difhour+(Difminute/60)).toFixed(2));
}

export const setCheckedAssistence = (projectID,employees,history) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        var UserID = localStorage.getItem('tcpUserID');
        const listDateEmployyes =[];
        console.log(employees)
        for (let index = 0; index < employees.length; index++) {
            const element = employees[index];
            const indate = element.in.toString().split(` `)[4];
            const outdate = element.out.toString().split(` `)[4];
            const hoursDif = calculateDifHour(indate,outdate);
            const data ={
                hours:hoursDif,
                in:indate,
                out:outdate,
                date: Date().toLocaleString()	
            }
            const dataEmployees={
                employeeID:element._id._id,
                salary: element.salary,
                data:data
            }
            
            listDateEmployyes.push(dataEmployees);
        }
        console.log(listDateEmployyes);
        axios.post(PORT + `/project/checkAssistence`,{
            projectID:projectID,
            registrantID :UserID,
            employeeList: listDateEmployyes,
            date: Date().toString()	
        } )
        .then((res) => {
            switch (res.status) {
                case 200:
                    history.push('/');
                    history.push('/ProjectDetail/'+projectID);
                    return resolve(res.data.data);
                case 300:
                    
                    break;
                default:
                    break;
            }

        })
        .catch((err) => {
            if(err.response && err.response.data)
                return reject(err.response.data)
                
            else
                return reject({error: true, message: "hubo un problema mi ciela"})
        })
    })
}