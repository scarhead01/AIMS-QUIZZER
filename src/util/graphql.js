import gql from "graphql-tag";

export const FETCH_POSTS_QUERY = gql`
{
getPosts {
    id 
    body 
    createdAt
     username 
    likeCount 
    likes {
        id
        username
    }
    commentCount
    comments{
        id 
        username 
        createdAt
         body
         reply{
             id
             username
             body
             createdAt
           
         }
         replyCount

    }
}
}
`


