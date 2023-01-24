import styles from "@/styles/Blog.module.css";
import React,{useEffect,useState} from "react";
const Post = (props) => {
 
  const [blog, setBlog] = useState(props.mydata);
  
  return (
      <div className={`${styles.body } ${styles.container}`}>
      {blog && <h1>{blog.title}</h1>}
      {blog && <p style={{"marginTop":"20px","wordSpacing":"3px"}}>{blog.content}</p>}
    </div>
  );
};
export async function getServerSideProps(context) {
  // Fetch data from external API
  const { slug } =context.query;
   
  const res = await  fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
  const mydata = await res.json()
  
  // Pass data to the page via props
  return { props: {  mydata }, }
}

export default Post;
