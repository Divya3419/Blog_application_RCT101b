import { BLOG_POST_SUCCESS } from "./type"


export const fetchBlogpost=(payload)=>{
    return {
        type:BLOG_POST_SUCCESS,payload
}
}