import axios from "axios";

// have to use an enviroment variable for your ip address instead of localhost bc imgur doesn't like localhost
export default axios.create({
    //baseURL: "http://192.168.0.102:8080"
    baseURL: "http://10.130.182.93:8080"
})

