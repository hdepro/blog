/**
 * Created by heben on 2017/4/23.
 */

/*export const BLOG_CONSTANT = {
    CREATE_BLOG:{type:Symbol("CREATE_BLOG"),route:"/blog/create"},
    DELETE_BLOG:{type:Symbol("DELETE_BLOG"),route:"/blog/delete"},
    GET_ALL_BLOG:{type:Symbol("GET_ALL_BLOG"),route:"/blog/getAll"},
    GET_BLOG:{type:Symbol("GET_BLOG"),route:"/blog/getById"},
    EDIT_BLOG:{type:Symbol("EDIT_BLOG"),route:"/blog/edit"}
};*/

export const CREATE_BLOG = {type:Symbol("CREATE_BLOG"),route:"/blog/create"};
export const DELETE_BLOG = {type:Symbol("DELETE_BLOG"),route:"/blog/delete"};
export const GET_ALL_BLOG = {type:Symbol("GET_ALL_BLOG"),route:"/blog/getAll"};
export const GET_BLOG = {type:Symbol("GET_BLOG"),route:"/blog/getById"};
export const EDIT_BLOG = {type:Symbol("EDIT_BLOG"),route:"/blog/edit"};
export const CHANGE_BLOG_STATE = {type:Symbol("CHANGE_BLOG_STATE"),route:"/blog/changeState"};


export const CREATE_TAG = {type:Symbol("CREATE_TAG"),route:"/tag/create"};
export const DELETE_TAG = {type:Symbol("DELETE_TAG"),route:"/tag/delete"};
export const GET_ALL_TAG = {type:Symbol("GET_ALL_TAG"),route:"/tag/getAll"};
export const GET_TAG = {type:Symbol("GET_TAG"),route:"/tag/getById"};
export const EDIT_TAG = {type:Symbol("EDIT_TAG"),route:"/tag/edit"};

export const GET_BLOG_COMMENT = {type:Symbol("GET_BLOG_COMMENT"),route:"/comment/getByBlogId"};
export const REPLY_COMMENT = {type:Symbol("REPLY_COMMENT"),route:"/comment/reply"};
export const DELETE_COMMENT = {type:Symbol("DELETE_COMMENT"),route:"/comment/delete"};

export const GET_ALL_RECOMMEND = {type:Symbol("GET_ALL_RECOMMEND"),route:"/recommend/getAll"};
export const CREATE_RECOMMEND = {type:Symbol("CREATE_RECOMMEND"),route:"/recommend/create"};
export const DELETE_RECOMMEND = {type:Symbol("DELETE_RECOMMEND"),route:"/recommend/delete"};

