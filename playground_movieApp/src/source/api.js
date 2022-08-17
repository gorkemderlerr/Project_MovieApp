import axios from "axios";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2I5MGYxY2Q1ZGZmMTI1NTlmNWY3NmM4OWQ0MmFlZSIsInN1YiI6IjYyYzY5YWVkMGJiMDc2MDA0ZWU1MjcwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r4ssVvSjFg_lI75A4bJrITdR0g41sQk1mLD-D9G1dW8";
export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`
    }
})