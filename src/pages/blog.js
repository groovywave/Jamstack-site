import * as React from "react" 
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/blog.module.scss"

const Blog = (props) => { 
    return ( 
      <Layout>
        <Seo title="Blog" description="これはhasenoriBlogページです。" />
       <div className={style.wrapper}>
            <div className ={style.container}>
            <h1>Blog</h1>
            <p>日常思ったこと感じたことを書いていきます。</p>
                 {props.data.allContentfulBlog.edges.map((singleBlog, index) => (
                        <div className={style.blogCard} key={index}>                            
                            <div className={style.textcontainer}>
                                <h3>{singleBlog.node.title}</h3>
                                <p>{singleBlog.node.excerpt}</p>
                                <p>{singleBlog.node.date}</p>
                                <Link to={singleBlog.node.slug}>Read More</Link>
                            </div>
                            <GatsbyImage 
                                image={singleBlog.node.image.gatsbyImageData} 
                                alt="card-image" 
                                className={style.cardImg}
                            /> 
                        </div>
                    )
                )}
            </div>
          </div>
      </Layout>
    ) 
} 
export default Blog
 
export const query = graphql`

query ContentfulBlogQuery {
    allContentfulBlog(sort: {fields: date, order: DESC}) {
      edges {
        node {
          title
          slug
          date(formatString: "YYYY-MM-DD")
          excerpt
          id
          image {
            gatsbyImageData(formats: AUTO, placeholder: BLURRED, quality: 90)
          }
        }
      }
    }
  }
  
    
`