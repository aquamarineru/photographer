import React from 'react'
import './home.scss'

export default function Home() {
  return (
    <section className="home">
        <img src="src/img/intro.png" alt="intro" className="home__img" />
        <h1 className="home__title">My name is Yana</h1>
        <div className="home__container container grid">
            <div className="home__description">
                <p>I am a freelance phographger based in Athens</p>
            </div>
        </div>
    </section>
  )
}
