import React, {useState, useEffect} from 'react'
import './header.scss'
import { BsSun, BsMoon } from 'react-icons/bs'
import { FcPhotoReel } from 'react-icons/fc'


const getStorageTheme = () => {
    let theme = "light-theme"
    if (localStorage.getItem("theme")) {
        theme = localStorage.getItem("theme")
    }
}
export default function Header() {
    const [navOpen, setNavOpen] = useState(false)
    const [activeNav, setActiveNav] = useState("")
    const [theme, setTheme] = useState(getStorageTheme())

    const themeToggler = () => {
        if (theme === "light-theme") {
            setTheme("dark-theme")
        } else {
            setTheme("light-theme")
        }
    }
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        if (this.scrollY >= 80) header.classList.add("scroll-header")
        else header.classList.remove("scroll-header")
       })
    useEffect(() => {
        document.documentElement.className = theme
        localStorage.setItem("theme", theme)
    }, [theme])

  return (
    <header className="header">
        <nav className="nav container">
            <a href="#" className="nav__logo">
                <FcPhotoReel className="nav__logo-icon"/>
                <span className="nav__logo-name">Yana</span>
            </a>
            <div className="nav__items">
            <div className={navOpen ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#about" className={activeNav === "#about" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#about')}>About me</a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" className={activeNav === "#services" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#services')}>Services</a>
                    </li>
                    <li className="nav__item">
                        <a href="#work" className={activeNav === "#work" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#work')}>Selected work</a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#contact')}>Contact</a>
                    </li>
                </ul>
            </div>
            <div className="nav__btns">
                    <div className="theme__toggler" onClick={themeToggler}>
                        {theme === "light-theme" ? <BsMoon className="theme__icon"/> : <BsSun className="theme__icon"/>}
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

