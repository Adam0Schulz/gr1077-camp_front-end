import axios from "axios";

// have to use an enviroment variable for your ip address instead of localhost bc imgur doesn't like localhost
export default axios.create({
    //baseURL: " 192.168.200.1:8080"
    baseURL: "http://localhost:8080"
})

