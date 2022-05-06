import React from "react"

export default function Card(props) {
    let boxInfo
    if (props.openSpots === 0){
         boxInfo = "SOLD OUT"
    } else if (props.location === "Online"){
        boxInfo = "ONLINE"
    }
    return (
        <div className="card">
            {boxInfo && <div className="info--box">{boxInfo}</div>}
            <img src={`../images/${props.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}