import React, { useEffect, useState } from "react"
import "./Nav.css"

function Nav(){
    const [show,handleShow] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true)
            }else handleShow(false)
        })
        return()=>{
            window.removeEventListener("scroll")
        }
    },[])


    const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/340px-Netflix_2015_logo.svg.png"
    const avatarUrl = "https://cdn-icons-png.flaticon.com/512/847/847969.png"
    return(
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src ={logoUrl} alt="netflix logo"></img>
            <img className="nav_avatar" src ={avatarUrl} alt="avatar"></img>

        </div>
    )
}

export default Nav