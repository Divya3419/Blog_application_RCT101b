import axios from "axios"
import { BLOG_POST_FAILURE, BLOG_POST_REQUEST } from "./action.type"
import { BLOG_POST_SUCCESS } from "./type"


export const fetchBlogpost=(payload)=(dispatch)=>{
dispatch({type:BLOG_POST_REQUEST})
return axios.get('http://localhost:8080/blogs',payload)
.then((r)=>{dispatch({type:BLOG_POST_SUCCESS,payload:r.data})
return {type:BLOG_POST_SUCCESS}
}
)
.catch((e)=>dispatch({type:BLOG_POST_FAILURE}))
}