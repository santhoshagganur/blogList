// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {title, description, publishedDate} = eachBlog

  return (
    <li className="blog-item-container">
      <div className="blog-information">
        <h1 className="post-title"> {title} </h1>
        <p className="posted-date"> {publishedDate} </p>
      </div>
      <p className="post-description"> {description} </p>
    </li>
  )
}

export default BlogItem
