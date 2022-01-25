import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const postService={
    getByUserId:()=>axiosService.get(`${urls.posts}?userId=${id}`)
}