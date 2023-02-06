import axios from "axios";

// have to use an enviroment variable for your ip address instead of localhost bc imgur doesn't like localhost
export default axios.create({
    baseURL: "http://10.130.180.249:8080"
})

