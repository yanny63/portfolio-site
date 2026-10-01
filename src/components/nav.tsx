import '../css/nav.css'
import { useState } from 'react'

export default function Nav() {
    const [ activeLink, setActiveLink ] = useState<string | null>(null)

    function changeActiveLink(value: string) {
        setActiveLink(value)
    }

    const links = [
        {to: "#profile", text: "Profile", target: '_self', type: 'internal'},
        {to: "#recent", text: "Recent", target: '_self', type: 'internal'},
        {to: "https://github.com/yanny63", text: "GitHub", target: "_blank", type: 'external'},
        {to: "#contact", text: "Contact", target: '_self', type: 'internal'}
    ]
    return (
        <nav className="nav">
            <div className='inner-nav'>
                <div className='logo'>
                    Logo
                </div>
                <ul className="nav-right">
                    { links.map((link, i) => (
                        <a key={i} href={link.to} onClick={() => (changeActiveLink(link.to))}
                        target={link.target} data-type={link.type} className={activeLink === link.to ? 'link-active' : ''}>
                            { link.text }
                        </a>
                    ))}
                </ul>
            </div>
        </nav>
    )
}