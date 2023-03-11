import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF, FaTiktok } from 'react-icons/fa'

export default function Social() {
  return (
    <div className="social">
        <ul className="social__items">
            <li><a href="#" className="social__link">
                <FiInstagram /></a></li>
            <li><a href="#" className="social__link">
                <FaFacebookF /></a></li>
            <li><a href="#" className="social__link">
                <FaTiktok /></a></li>
        </ul>
    </div>
  )
}
