import React, {useState} from 'react'
import styles from "@/styles/Blog.module.css";
import Link from 'next/link'

const Blog = (props) => {
  const [blogs, setblogs] = useState(props.allData)
  setblogs(props.allData);
  return (
    <div className={styles.body}>
          <div className={styles.h1}>Latest Blogs</div>

          {blogs.map((blogitem)=>{
           return  <div key={blogitem.slug} className={styles.post}>
          <Link href={`/blogpost/${blogitem.slug}`}>
          <h2 className={styles.h2}>{blogitem.title}</h2></Link>
            <p className={styles.p}>
              {blogitem.content.substr(0,100)}...
            </p>
          </div>
          })}

        </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await  fetch('http://localhost:3000/api/blogs')
  const allData = await res.json()
  // Pass data to the page via props
  return { props: {  allData }, }
}
export default Blog;

