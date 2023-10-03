import axios from 'axios';

const URL_backend = "http://localhost:5000";
export const handleClick = (command)=>{
    if(command === "open"){
        axios.get(URL_backend + "/start")
            .then(()=>{
                console.log("open sucessfully");
            })
            .catch((err)=>{
                console.log(err);
            })
    }
    else if(command === "close"){
        axios.get(URL_backend + "/stop")
            .then(()=>{
                console.log("stop sucessfully");
            })
            .catch((err)=>{
                console.log(err);
            })
    }
    else if(command === "close-motor"){
        axios.get(URL_backend + "/stop_motor")
            .then(()=>{
                console.log("stop sucessfully");
            })
            .catch((err)=>{
                console.log(err);
            })
    }
    else if(command === "open-motor"){
        axios.get(URL_backend + "/start_motor")
            .then(()=>{
                console.log("stop sucessfully");
            })
            .catch((err)=>{
                console.log(err);
            })
    }
}

