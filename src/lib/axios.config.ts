import axios from "axios";

// have to use an enviroment variable for your ip address instead of localhost bc imgur doesn't like localhost
export default axios.create({
    baseURL: "http://10.136.130.177:8080"
    //baseURL: "http://localhost:8080"
})

