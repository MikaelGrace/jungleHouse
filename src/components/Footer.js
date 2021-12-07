import {useState} from 'react'
import '../styles/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState('')

    return (
        <footer className='jh-footer'>
            <div className='jh-footer-elem'>
                For plant enthusiasts 🌿🌱🌵
            </div>
            <div className='jh-footer-elem'>Subscribe to our newsletter :</div>
        </footer>
    )
    
}

export default Footer