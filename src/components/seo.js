import * as React from "react"
import {Helmet} from "react-helmet"
import {useLocation} from "@reach/router"
import {useStaticQuery, graphql} from "gatsby"



const SEO = ({title, description}) => {
    const {pathname} = useLocation()
    const {site} = useStaticQuery(query)
    const {
        defaltTitle,
        defaultDescription,
        defautImage,
        siteUrl,
    } = site.siteMetadata

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: defaultImage,
        url: `${siteUrl}${pathname}`
    }

    return (
        <Helmet>
            <html lang="ja" />
            <meta name="viewprt" content="initial-scale=1.0, width=device-width" />

            <meta charSet = "utf-8" />

            <title>{title}</title>
            <meta name= "description" content={description} />
            <meta name= "image" content={defaultImage} />
            <Link rel="canonical" href={seo.canonical} />

            {seo.title && <meta property = "og:title" content={seo.title} />}
            {seo.description && <meta property="og:description" content= {seo.description} />}
            {seo.url && <meta property="og:rul" content={seo.url} />}
            {seo.image && <meta property="og:image" content={seo.image} />}
            
        </Helmet>
    )

}

export default SEO

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle
                defaultDescription
                defaultImage
                siteUrl
            }
        }
    }
`