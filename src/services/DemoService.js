import axios from "axios";
 const DEMO_BASE_REST_API_URL = "http://localhost:8080/api/Demo";
 
 class DemoService{
    showAll(){
        return axios.get(DEMO_BASE_REST_API_URL);
    }
    createDemo(demo){
        return axios.post(DEMO_BASE_REST_API_URL,demo);
    }

    Login(demo){
        return axios.post("http://localhost:8080/api/auth/signin");
    }
 }

 export default new DemoService();