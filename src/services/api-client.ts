import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{key:'8a9f66fd03f745dfa1d399318b09dc06'}
})