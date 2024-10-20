import React from 'react'

export default ({ comments }) => {

    const renderedComments = comments.map(comment => {
        let content ;

        if(comment.status === 'approved'){
            content = comment.content
        }

        if(comment.status === 'pending'){
            content = "This content waiting for moderation"
        }
        if(comment.status === 'rejected'){
            content = "This content rejected"
        }

        return <li key={comment.id}>
            {content}
        </li> 
    })
   
    return <ul className=''>
        {renderedComments}
    </ul>
}