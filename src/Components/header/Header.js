import React from 'react'
 import "./Header.css";
 import {Link} from "react-router-dom"

 const Header = ()=>{
    return(
        <div className='header'>
            <div className='headerLeft'>
            <Link to="/"><img className='header__icon' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAclBMVEX1xRgAAAD6yRj/zRlFNwb///+5lRLTqhXrvRg1KwVNPgh7YwzhtRaHbA3CnBP1wwD87MX41nv2yTb++Or2y0huWQsZFAOriRD1xipBNAZcSgn/0houJQSMcQ4gGgOxjxJjUAoOCwEoIQT/2xubfA9VRAjHVvzIAAACcUlEQVRoge2b25aCIBRAT2CmRlZTjmNmt6n//8VBDLxMaJILXs5+KCBhFyEcXAuYczbbL7DG13ZTOmE+3+3Xa3tegPV6vyvFux+rWqH+2XHx3rqXm/dz2DjwcvMGtm7EW7A4nps40iIIgiAIgiAIgiAIggiIpJV55qGTJ20oJZ1WRnhDryKMea0k8yTHHIAu63y4IBAc6nxJVDChokXWaORN8Uzi8zrRrKb88NHIl+LjrEtKS/FSZqcQcxFkHXH4TyyqTStOCbDTsHg2ubggsGgKdOIzmVicEBLrxNdGVxRTi0NCUp04ykkiy1dTi2eErrRiStTf8E/83v3cIw7yQ4+YacSExam/gEF1jzimnl4MGjG7VBcM9nmPOIXWIH5LXHyr5qixeMVEK7cx4gbMQHwUU2NSjZ+LoXjZ39kvxaGQZX7V8Cjx4ypTJwPxrRBv4jUaJfZpruYWA/Gp+q1iiVjKRt8b1YSqmcVE3Jik07FilTYS1wtvPFaspjsD8TerI4CF7Dor4qAepmBXXKji3K7Yl6W3X6tipob1xbI4kKWF3a5mIO+ns0asXY8/FBMZA8Q6sS4C+VAsm7oyjZiedeJPZi4uvlepU0BfivNALd1tMc3V3GPW1c/76Uhfipu0wtvsXgeIZuLn2DkMi8+aQOBhJn6WF8Pi1ham/YUMxECOz9pD4vamrQ6II5Ng78rFVagVt8W6baq85qQm+aRfq9mYR1x8F0kGdJUNbsxJnFb4PJ5fRp6XvLGVefmoQaUbha2LO48imo3wwvoRBYIgCIIgCIIgCIIgiCOcHUlxdgjH2bEjZwet3B0tc3aYztHxwT9Sxi89bgT2WwAAAABJRU5ErkJggg=='/></Link>
            <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
        </div>
    )
 }

 export default Header;