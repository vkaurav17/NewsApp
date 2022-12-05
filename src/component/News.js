import React, {useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>{
   const [articles, setArticle] = useState([])
   const [page, setPage] = useState(1)
   const [totalResults, settotalResult] = useState(0)
        
       const update= async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=e401d82b47ab47938fb684275159583c&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData=await data.json();
        setArticle(parsedData.articles);
        settotalResult(parsedData.totalResults);
       }
       const pre = async()=>{
         setPage(page-1) ;
         update();
       }
       
       const next= async()=>{
        setPage(page+1);
        update();
       }
      const fetchMoreData= async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=e401d82b47ab47938fb684275159583c&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) ;
        let data = await fetch(url);
        let parsedData=await data.json();
        setArticle(articles.concat(parsedData.articles));
        settotalResult(parsedData.totalResults);
         }
       useEffect(() => {
        update();
       }, [])

    return (
      <>
        
        <div style={{color:'green'}}><h1 className="text-center" style={{margin:'35px 0px',marginTop:'80px'}} >NewsFresh-Headlines</h1></div>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
         
        >
          <div className="container my-2 " >
          <div className="row">
            {
                articles.map ((element)=>{
                return <div className="col md-4" key={element.url} > 
                 <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} 
                 imageUrl={element.urlToImage?element.urlToImage:"https://img.etimg.com/thumb/msid-95530870,width-1070,height-580,imgsize-26058,overlay-economictimes/photo.jpg"} newsUrl={element.url}/>
                 </div>  

                })
                } 
         </div>
         </div>
         </InfiniteScroll>
      
      
       {/* <div className="container my-3 d-flex justify-content-between">
       <button disabled={page<1} type="button" onClick={pre} className="btn btn-dark">&larr; previous</button>
       <button  disabled={page+1> Math.ceil(totalResults/pageSize)} type="button" onClick={next} className="btn btn-dark">next &rarr;</button>
    </div> */}
  </>
    )
  }
  News.defaultProps={
    pageSize:9,
  }
  News.propTypes={
    pageSize:PropTypes.number,
  }
export default News
