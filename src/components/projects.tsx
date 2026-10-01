import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "../css/projects.css"
import yannyPfp from "../images/yanny_pfp.jpg"
import { useRef } from "react";
import { IconArrowNarrowRight, IconDotsCircleHorizontal, IconMoodSmile, IconPaperclip, IconPhone, IconSend, IconVideo } from "@tabler/icons-react";

export default function Projects() {
    const analyserChartRef = useRef<SVGSVGElement | null>(null)
    const analyser_svg = (
        <svg ref={analyserChartRef}
            viewBox="0 0 1000 220"
            className="rating-chart"
            preserveAspectRatio="none"
            >
            <defs>
                <linearGradient id="rating-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b7cff" />
                <stop offset="55%" stopColor="#a99fff" />
                <stop offset="100%" stopColor="#6ee7f9" />
                </linearGradient>
            </defs>

            <path
                className="rating-line"
                d="
                M 0 145

                C 60 135, 90 105, 140 115
                S 210 150, 260 120 
                S 330 75, 390 92
                S 455 125, 510 95
                S 580 55, 640 70
                S 705 100, 760 78
                S 835 42, 890 58
                S 950 82, 1000 48
                "
            />
        </svg>
    )

    const cs_analyzer_html = (
        <article className="preview project-preview--analyser">
            <header className="preview-header">
                <h2>Match Analysis</h2>
                <span><span className="map">Ancient</span> 13 : 8</span>
            </header>
            <div className="mvp-container">
                <div className="pfp">
                    <img src={yannyPfp} alt="yanny_profile_picture" />
                </div>
                <div className="mvp">
                    <div className="rating-nickname">
                        <div className="rating-container">
                            <span className="rating">1.53</span>
                        </div>
                        <h3>_yanny</h3>
                    </div>
                    <span className="powered-by">Powered by yanny63 demo analyser</span>
                </div>
            </div>
            <div className="aim-rating">
                <p>AIM Rating</p>
                <span className="aim">92.4</span>
                <span className="aim-line"></span>
            </div>
            <div className="stats">
                <div className="stat">
                    <span className="stat-name" title="Time To Damage">TTD</span>
                    <span className="stat-value">460ms</span>
                </div>
                <div className="stat">
                    <span className="stat-name" title="Headshot percentage">HS%</span>
                    <span className="stat-value">82%</span>
                </div>
                <div className="stat">
                    <span className="stat-name" title="Duels Won">Duels</span>
                    <span className="stat-value">73%</span>
                </div>
            </div>
            <div className="performance">
                <h2>Performance</h2>
                <div className="chart">
                    { analyser_svg }
                </div>
            </div>
        </article>
    )

    const conversationPreview = [
        {
            senderId: 1,
            messages: [
            "Hey, did you finish the new chat update?",
            "I just tested the latest build."
            ]
        },
        {
            senderId: 2,
            messages: [
            "Yeah, WebSockets are working properly now.",
            "I also added read receipts and typing indicators."
            ]
        },
        {
            senderId: 1,
            messages: [
            "Nice, the interface feels really smooth.",
            "Can you send me the final version?"
            ]
        },
        {
            senderId: 2,
            messages: [
            "Sure, I'll send it in a minute."
            ]
        }
    ]

    const user_id = 2

    const messenger_html = (
        <article className="preview project-preview--messenger">
            <header className="chat-header">
                <div className="header-left">
                    <div className="profile-picture">
                        <img src={yannyPfp} alt="chat_profile_picture" />
                    </div>
                    <span className="chat-status">
                        <span className="active">
                            <span className="dot"></span>
                            Online
                        </span>
                        <h3 className="chat-nickname">yanny63</h3>
                    </span>
                </div>
                <div className="header-right">
                    <div className="chat-icons">
                        <IconPhone stroke={2} width={32} height={32} />
                        <IconVideo stroke={2} width={32} height={32} />
                        <IconDotsCircleHorizontal stroke={2} width={32} height={32} />
                    </div>
                </div>
            </header>
            <div className="chat-content">
                { conversationPreview.map((message, u) => (
                    <div key={u} className={`messages-container ${message.senderId === user_id ? "user-message" : "other-message"}`}>
                        <div className={message.senderId === user_id ? 'message user' : 'message other'}>
                            { message.senderId !== user_id && 
                            <div className="picture-container">
                                <img className="chat-profile-picture" src={yannyPfp} alt="yanny_chat_picture" />
                            </div>}
                            <div className="messages" style={ message.senderId === user_id ? {alignItems: "flex-end"} : {alignItems: "flex-start"}}>
                                {message.messages.map((m, i) => {
                                    const isMine = message.senderId === user_id
                                    const isFirst = i === 0
                                    const isLast = i === message.messages.length - 1
                                    const isSingle = message.messages.length === 1

                                    let className = "message-content"

                                    if (isMine) {
                                        className += " chat-blue"
                                        if (!isSingle && isFirst) {
                                        className += " message-radius-user-first";
                                        }
                                        if (!isSingle && isLast) {
                                        className += " message-radius-user-last";
                                        }
                                    } else {
                                        className += " chat-grey"
                                        if (!isSingle && isFirst) {
                                        className += " message-radius-other-first"
                                        }
                                        if (!isSingle && isLast) {
                                        className += " message-radius-other-last"
                                        }
                                    }

                                    return (
                                        <span key={i} className={className}>
                                            {m}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>    
                ))}
            </div>
            <footer className="chat-input-container">
                <IconPaperclip stroke={2} width={32} height={24} />
                <input type="text" readOnly className="chat-input" value="Here you go!" />
                <IconMoodSmile stroke={2} width={32} height={24} />
                <button className="chat-send-button">
                    <IconSend stroke={2} width={32} height={24} />
                </button>
            </footer>
        </article>
    )

    const overlay_html = (
        <article className="preview project-preview--overlay" style={{ position: "relative" }}>
            <div className="overlay">
                <h2>Overlay Component</h2>
                <p>Flexible, lightweight and easy to integrate</p>
                <button>
                    Explore
                    <IconArrowNarrowRight stroke={2} width={32} height={32} />
                </button>
            </div>
            <div className="not-overlay">
                <div className="not-nav">
                    <span style={{ justifyContent: "start" }}>Logo</span>
                    <span style={{ justifyContent: "end" }}>Settings</span>
                </div>
                <div className="not-cards">
                    <div className="not-card">
                        Project Overview
                    </div>
                    <div className="not-card">
                        <span>Activity</span>
                        <p>12 updates</p>
                    </div>
                </div>
                <div className="not-button">
                    Open Overlay
                </div>
            </div>
        </article>
    )

    const projects = [
        {
            number: "01",
            title: "CS2 Analyzer",
            technologies: ["Python", "Pandas", "demoparser2"],
            github: null,
            type: "analytics",
            npm: null,
            preview: cs_analyzer_html,
        },
        {
            number: "02",
            title: "Realtime Messenger",
            technologies: ["React", "FastAPI", "PostgreSQL", "WebSockets"],
            github: "https://github.com/yanny63/contact-manager",
            npm: null,
            preview: messenger_html
        },
        {
            number: "03",
            title: "Overlay",
            technologies: ["TypeScript", "Web Components"],
            github: "https://github.com/yanny63/web-overlay",
            npm: "https://www.npmjs.com/package/@yanny63/overlay",
            preview: overlay_html
        }
    ]

    const secRef = useRef<HTMLElement | null>(null)

    useGSAP(() => {
        const projects = gsap.utils.toArray<HTMLDivElement>(".projects-stage")

        const mm = gsap.matchMedia()

        mm.add("(max-width: 768px)", () => {
            projects.forEach((project, index) => {
                const path = project.querySelector(".rating-line");

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: project,
                        start: "top 80%",
                        once: true,
                    },
                })

                tl.from(project, {
                    opacity: 0,
                    x: index === 0 ? -80 : 0
                })

                if (path) {
                    tl.from(path, {
                        drawSVG: 0,
                    })
                }
            })
        })
        
        mm.add("(min-width: 769px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: secRef.current,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: () => "+=" + secRef.current!.clientHeight
                }
            })

            projects.forEach((project, index) => {
                const path = project.querySelector(".rating-line");
                const content = project.querySelectorAll(".project-preview, .project-info")
                
                tl.from(project, {
                    y: 80,
                    opacity: 0,
                    duration: 5
                })
            
                tl.set(project, { pointerEvents: "all" })

                if (path) {
                    tl.from(path, {
                        drawSVG: 0,
                        duration: 5,
                    })
                }

                tl.to({}, { duration: 20 })
                if (index < projects.length - 1) {
                    tl.set(project, { pointerEvents: "none" })

                    tl.to(content, {
                        y: -80,
                        opacity: 0,
                        duration: 10,
                    })
                }
            })
        })
    }, {scope: secRef})

    return (
        <section className="bg-main" id="recent" ref={secRef}>
            { projects.map((project) => (
                <div key={project.number} className="inner-section projects-stage">
                    <article className="project-info">
                        <header className="project-header">
                            <h3>{ project.number }</h3>
                            <h1 className="project-title">{ project.title }</h1>
                        </header>
                        <div className="project-body">
                            <div className="project-technologies">
                                <p className="project-tech-used">Technologies Used:</p>
                                <ul className="project-tech-list">
                                    { project.technologies.map((tech) => (
                                        <li key={tech} className="tech-used">
                                            { tech }
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <footer className="project-links">
                            <button className="explore-link">
                                <span>Explore</span>
                            </button>
                            { project.github &&
                            <a href={project.github} target="_blank" className="github-link">
                                <span>GitHub</span>
                            </a>}
                            { project.npm &&
                            <a href={project.npm} target="_blank" className="npm-link">
                                <span>View npm</span>
                            </a>}
                        </footer>
                    </article>

                    <div className="project-preview">
                            { project.preview }
                    </div>
                </div>
            ))}
        </section>
    )
}