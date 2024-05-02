import { useState } from "react"
import LikeCounter from "./LikeCounter"

export default function Headline(props) {
    return (
      <div className="HeadLine">
        <h2>{props.title}</h2>
        <h2>{props.text}</h2>
        <h2>{props.time}</h2>
        <img src={props.icon} />
        <p>
            Temp: {props.temp} &deg;C, Wind: {props.wind} km/h
        </p>
        <LikeCounter />
      </div>
    )
  }