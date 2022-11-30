import axios from "axios";
const DEMO_BASE_REST_API_URL = "http://localhost:8080/api/auth/signin";

const requestLogin = ({ username, password }) => {
  return axios.post(
    DEMO_BASE_REST_API_URL,
    { username, password },
    {
      headers: { "Content-Type": "application/json" },
      // withCredentials: true
    }
  );
};
const LoginService = { requestLogin };
export default LoginService;
