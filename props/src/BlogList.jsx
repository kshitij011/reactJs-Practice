const BlogList = ({blogs, title, deleteBlog}) => {

    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog)=> (
                <div className="home-preview" key={blog.id} >
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={()=>deleteBlog(blog.id)}>Delete blog</button>
                </div>
            ))}
        </div>
     );
}

export default BlogList;