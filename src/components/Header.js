import React from "react";
import "./Header.css";


export default function Header() {
    return (
        <header className="Header">
            <nav className="Nav">
               <div className="Nav-left">
          <h2>OrganicWorld</h2>
                </div>
                 <div className="Nav-right">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>
            </nav>
        </header>
    )
}

