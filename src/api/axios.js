import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params: {
        api_key : "bd1a045c271d95e66f7391de8e28d92f",
        language : "ko-KR"
    }
});

export default instance;