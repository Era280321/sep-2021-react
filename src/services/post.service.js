import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postService={
    getByUserId:(id)=>axiosService(`${urls.posts}?userId=${id}`).then(value => value.data)
}