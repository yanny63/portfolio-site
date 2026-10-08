import React, { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/all"
import ScrollTrigger from "gsap/ScrollTrigger"
import DrawSVGPlugin from "gsap/DrawSVGPlugin"
import { Flip } from "gsap/Flip"
import { motion, AnimatePresence } from "framer-motion"
import Projects from "./projects"
import Contact from "./contact"

gsap.registerPlugin(ScrollTrigger, Flip, ScrollToPlugin, DrawSVGPlugin)
ScrollTrigger.config({ ignoreMobileResize: true })

interface Technology {
    name: string
    description: string
    number: string
    index: number
}

export default function Home() {
    const projectsButtonRef = useRef<HTMLAnchorElement | null>(null)

    function magnetMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!projectsButtonRef.current) return
        const rect = projectsButtonRef.current.getBoundingClientRect()

        const STRENGTH = 0.1

        const centerY = rect.top + rect.height / 2
        const centerX = rect.left + rect.width / 2

        const x = e.clientX - centerX
        const y = e.clientY - centerY

        projectsButtonRef.current.style.transform = `translate(${x * STRENGTH}px, ${y * STRENGTH}px)`
    }
    function magnetLeave() {
        if (!projectsButtonRef.current) return
        projectsButtonRef.current.style.transform = `translate(0, 0)`
    }
   
    const technologies: Array<Technology>  = [
            {name: "Python", description: "A versatile programming language used for backend development, automation, APIs, and data processing", number: "01", index: 1},
            {name: "FastAPI", description: "A modern Python framework for building fast, scalable, and efficient APIs", number: "02", index: 2},
            {name: "TypeScript", description: "A strongly typed superset of JavaScript that improves code reliability and maintainability", number: "03", index: 1},
            {name: "React", description: "A JavaScript library for building modern, interactive user interfaces", number: "04", index: 1},
            {name: "C++", description: "A high-performance programming language used for systems programming, low-level software, and performance-critical applications", number: "05", index: 1},
            {name: "Go", description: "A fast and efficient programming language well suited for backend services, networking, and concurrent applications", number: "06", index: 1},
        ]

    const techAnimationValues = [
        { grid: "1 / 1 / 1 / 2",},
        { grid: "1 / 2 / 1 / 3", },
        { grid: "1 / 3 / 1 / 3", },
        { grid: "2 / 1 / 2 / 1", },
        { grid: "2 / 2 / 2 / 2", },
        { grid: "2 / 3 / 2 / 3",},
    ]

    const exploringText = (
    <>
        <span className="terminal-icon">{'{'}</span>

        <div>
        <span className="terminal-name">    "3D"</span>
        <span>: </span>
        <span className="terminal-value">"Three.js + Blender"</span>
        <span>,</span>
        </div>

        <div>
        <span className="terminal-name">    "animation"</span>
        <span>: </span>
        <span className="terminal-value">"GSAP"</span>
        <span>,</span>
        </div>

        <div>
        <span className="terminal-name">    "rendering"</span>
        <span>: </span>
        <span className="terminal-value">"WebGL"</span>
        <span>,</span>
        </div>

        <div>
        <span className="terminal-name">    "physics"</span>
        <span>: </span>
        <span className="terminal-value">"in progress"</span>
        </div>

        <span className="terminal-icon">{'}'}</span>
    </>
    )

    interface Terminal {
        tInput: string
        tOutput: React.ReactElement
        proper: boolean
    }

    const [ terminal, setTerminal ] = useState<Array<Terminal>>([])

    const profileRef = useRef<HTMLElement | null>(null)
    const techRef = useRef<HTMLDivElement | null>(null)
    const progressRef = useRef<HTMLSpanElement | null>(null)
    const techBottom = useRef<HTMLDivElement | null>(null)
    
    useGSAP(() => {
        const items = gsap.utils.toArray<HTMLDivElement>(".technology")
        const mm = gsap.matchMedia()
        

        mm.add("(min-width: 769px)", () => {
            const state = Flip.getState(items)
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: profileRef.current,
                    start: "top top",
                    end: () => "+=" + (profileRef.current?.offsetHeight! / 1.7),
                    scrub: 1,
                    pin: true,
                    refreshPriority: 1
                }
            })

            items.forEach((item, i) => {
                gsap.set(item, { gridArea: techAnimationValues[i].grid, })
            })

            tl.add(Flip.from(state, {
                duration: 20,
                ease: "circ.inOut"
            }))
            items.forEach((item) => {
                tl.to(item, {
                    borderRadius: 20,
                }, 0)
            })

            tl.to(".technologies-i-use", {
                y: -80,
                opacity: 0,
                duration: 10,
            }, "+=4")

            tl.to(".technologies-i-use", {
                position: "absolute"
            })

            tl.to(".exploring-container", {
                y: 0,
                opacity: 1,
                position: "static",
                duration: 10,
            })

            tl.to(".terminal", {
                boxShadow: "0 0 40px 10px rgba(0, 0, 0, 0.3)"
            })

            tl.to(progressRef.current, {
                width: "100%",
                duration: tl.duration()
            }, 0)
        })

        mm.add("(max-width: 768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: profileRef.current,
                    start: "top top",
                    end: () => "+=6000",
                    scrub: 1,
                    pin: true,
                    refreshPriority: 1
                }
            })

            items.forEach((item, i) => {
                tl.from(item, {
                    opacity: 0,
                    x: 40,
                    delay: i * 0.2,
                    duration: 3,
                })
            })

            tl.to(techRef.current, {
                duration: 20,
                scrollTo: {
                    autoKill: false,
                    y: techRef.current!.scrollHeight - techRef.current!.clientHeight
                },
            }, 2)

            tl.to(".technologies-i-use", {
                y: -80,
                opacity: 0,
            })

            tl.to(".technologies-i-use", {
                position: "absolute"
            })

            tl.to(".exploring-container", {
                y: 0,
                opacity: 1,
                position: "static"
            })

            tl.to(".terminal", {
                boxShadow: "0 0 40px 10px rgba(0, 0, 0, 0.3)"
            })

            tl.to(progressRef.current, {
                width: "100%",
                duration: tl.duration()
            }, 0)
        }) 
    }, { scope: profileRef })

    const terminalInputRef = useRef<HTMLInputElement | null>(null)
    const [ terminalValue, setTerminalValue ] = useState("")
    const [ terminalHintVisible, setTerminalHintVisible ] = useState<boolean>(false)

    const handleInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            let output : React.ReactElement
            let isProper : boolean
            switch (terminalValue) {
                case "cat exploring.txt":
                    output = exploringText
                    isProper = true
                    break;
                case "help":
                    output = (
                        <>
                            <p className="terminal-name">Available commends:</p>
                            <span className="terminal-value"> - cat exploring.txt</span>
                        </>
                    )
                    isProper = true
                    break
                default:
                    output = (
                        <>
                            <span className="invalid">&gt;&nbsp;Unknown commend, type "help" or hover over the dolar sign to check the hint</span> 
                        </>
                    )
                    isProper = false
                    break;
            }
            setTerminal(prev => [...prev, {
                tInput: terminalValue,
                tOutput: output,
                proper: isProper
            }])
            setTerminalValue("")
        }
    }

    function focusTerminal() {
        terminalInputRef.current?.focus()
    }
    
    return (
        <div className="main" id="home">
            <section className="bg-main">
                <div className="inner-section" id="landing">
                    <div className="landing-presentation">
                        <h1 className="header text-purple">I build things.</h1>
                        <p className="subheader">Interactive experiences, software and ideas brought to life through code.</p>
                    </div>
                    <div className="landing-button">
                        <div className="my-work">
                            <span>Explore my work</span>
                            <div className="magnetic-wrapper" onMouseMove={magnetMove} onMouseLeave={magnetLeave}>
                                <a href="#recent" className="magnetic-button" ref={projectsButtonRef}>
                                    <span>View projects</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-main" id="profile" ref={profileRef}>
                <div className="inner-section profile">
                    <h1 className="header text-object">
                        A little about me
                        <span className="progress" ref={progressRef}></span>
                    </h1>
                    <div className="profile-secondary">
                        <div className="technologies-i-use">
                            <h2 className="subheader profile-sub">Technologies I use</h2>
                            <div className="technologies" ref={techRef}>
                                { technologies.map((technology) => (
                                    <div className="technology" key={technology.number} style={{ zIndex: technology.index }}>
                                        <header className="tech-header">
                                            <span className="tech-number">
                                                { technology.number }
                                            </span>
                                            <h2 className="tech-name">
                                                { technology.name }
                                            </h2>
                                        </header>
                                        <p className="tech-desc">
                                            { technology.description }
                                        </p>
                                    </div>
                                ))}
                                <div ref={techBottom}></div>
                            </div>
                        </div>
                        <div className="exploring-container">
                            <h2 className="subheader profile-sub thinking-text">Currently exploring</h2>
                            <div className="exploring-inner">
                                <AnimatePresence>
                                    { terminalHintVisible && 
                                    <motion.div className="hint" initial={{ opacity: 0 }} exit={{ opacity: 0}}
                                    animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                                        Run this commend:&nbsp;
                                        <span className="terminal-icon">cat exploring.txt</span>
                                    </motion.div>}
                                </AnimatePresence>
                                <div className="terminal" onClick={focusTerminal}>
                                { terminal.length > 0 && 
                                    terminal.map((t) => (
                                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                            <div className="">
                                                <span className="terminal-icon" onMouseEnter={() => {setTerminalHintVisible(true)}} onMouseLeave={() => {setTerminalHintVisible(false)}}>$</span> 
                                                { t.tInput }
                                            </div>
                                            <pre className={t.proper ? "" : "invalid"}>
                                                { t.tOutput }
                                            </pre>
                                        </div>
                                    ))}
                                    <label className="input-label" htmlFor="terminal">
                                        <span className="input">
                                            <span className="terminal-icon" onMouseEnter={() => {setTerminalHintVisible(true)}} onMouseLeave={() => {setTerminalHintVisible(false)}}>$</span> 
                                            <input type="text" id="terminal" ref={terminalInputRef} value={terminalValue} onChange={(e) => {setTerminalValue(e.currentTarget.value)}} onKeyDown={handleInputKey} />
                                        </span>
                                    </label> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Projects />
            <Contact />
        </div>
    )
}