import React from 'react'
import { Link } from 'react-router-dom';

const BlogThree = (props) => {

    console.log(props);
    const {blog, link} = props.blog;
    return (
        <div>
            <h4>{blog}</h4>
            <Link to={{pathname:`${link}`}} target="_blank">Read the blog</Link>
        </div>
    )
}

export default BlogThree
