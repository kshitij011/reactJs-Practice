import { useState } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome party', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
    ]);

    const deleteBlog = (id) => {
        const newBlogs = blogs.filter((blog)=>blog.id !== id);
        setBlogs(newBlogs);
    }

    return(
        <div className="home">
            <BlogList blogs={blogs} deleteBlog={deleteBlog} title='All blogs'/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} deleteBlog={deleteBlog} title="Mario's Blog"/>
        </div>
    )
}

export default Home;