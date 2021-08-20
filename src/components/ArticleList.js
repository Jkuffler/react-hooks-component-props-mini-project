import React from "react"

function ArticleList({blogData}) {
    const eachArticle = blogData.map((blog) => { 
    return(
    <article>
        <h3>{eachArticle.title}</h3>
        <small>{eachArticle.date}</small>
    </article>)}
    )}

export default ArticleList