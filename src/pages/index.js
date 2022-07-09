import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import JSLogo from "../images/javascript.svg"
import ReactLogo from "../images/react.svg"
import GatsbyLogo from "../images/gatsby.svg"
import NextLogo from "../images/next.svg"
import * as style from "../styles/index.module.scss"

const Index = (props) => {
  return(
    <Layout>
        <Seo title="Jack of AllTrades" description= "Jack ofAll Tradesの公式サイトです"/>
        <div className={style.hero}>
            <StaticImage 
                src="../images/index-hero.jpg" 
                alt="hero" 
                quality={90} 
                placeholder="blurred" 
                formats={["AUTO","WEBP", "AVIF"]} 
                className={style.heroImg}
            />
            <div className={style.textContainer}>
                <h1>hasenori</h1>
                <h3>日常思ったこと感じたこと</h3>
            </div>
        </div>

        <div className={style.container}>
            <div className={style.company}>
                <div>
                    <h2>私について</h2>
                    <p>{props.data.contentfulLastupdate.lastupdate}</p>
                    <p>健康オタクでサッカー好き</p>
                </div>
                <StaticImage
                    src="../images/company.jpg" 
                    alt="profile" 
                    quality={90} 
                    placeholder="blurred" 
                    formats={["AUTO","WEBP", "AVIF"]} 
                />
            </div>
            <div className={style.service}>
                <h2>学習年数</h2>
                <div className={style.serviceContainer}>
                    <div><img src={JSLogo} alt="javascript"/><span>JavaScript / 1 years</span></div>
                    <div><img src={ReactLogo} alt="react"/><span>React / 0 years</span></div>
                    <div><img src={GatsbyLogo} alt="Gatsby"/><span>Gatsby / 0 years</span></div>
                    <div><img src={NextLogo} alt="Next"/><span>Next.JS / 0 years</span></div>
                </div>
            </div>
            {/* <div className = {style.ctaButton}>
                <Link to="/contact">Contact Us!</Link>
            </div> */}
        </div>
    </ Layout>
  )
}
export default Index

export const query = graphql`
query IndexQuery {
    contentfulLastupdate {
      lastupdate(formatString: "YYYY-MM-DD")
    }
  }  
`
