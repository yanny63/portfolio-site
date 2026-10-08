import { IconArrowNarrowUp } from "@tabler/icons-react"
import "../css/contact.css"

function scrollUp() {
    window.scrollTo({
        top: 0
    })
}

export default function Contact() {
    return (
        <section className="bg-main" id="contact">
            <div className="inner-section inner-contact">
                <div className="contact-left">
                    <header className="contact-header">
                        <h1 className="header text-purple">Get in touch with me</h1>
                        <p className="contact-pg">Have a project in mind, want to collaborate or just say hi? <br />Send me a message</p>
                    </header>
                    <div className="contact-info">
                       <div className="contact-email-container">
                            <span className="contact-email">Email</span>
                            <a className="email" href="mailto:contact.yanny0@gmail.com">contact.yanny0@gmail.com</a>
                        </div>
                        <div className="contact-links">
                            <a href="https://github.com/yanny63" target="_blank">GitHub <IconArrowNarrowUp stroke={2} /></a>
                            <a href="" target="_blank">LinkedIn <IconArrowNarrowUp stroke={2} /></a>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <form action={''} method="POST">
                        <div className="form-inner">
                            <label>
                                Your Name
                                <input className="form-input" type="text" name="name" placeholder="John Smith" required />
                            </label>
                            <label>
                                Email Address
                                <input className="form-input" type="email" name="email" placeholder="you@example.com" required />
                            </label>
                        </div>
                        <label>
                            Subject
                            <input type="text" className="form-input" name="subject" placeholder="What's this about?" required />
                        </label>
                        <label>
                            Message 
                            <textarea className="form-input textarea" name="message" placeholder="Tell me a little about your idea..." required />
                        </label>
                        <div className="inner-form">
                            <input type="submit" className="submit-button" value={'Submit'} />
                            <input type="reset" className="reset-button" value={'Reset'} />
                        </div>
                    </form>
                </div>
            </div>
            <footer className="contact-footer">
                <span>yanny63</span>
                <span onClick={scrollUp} className="back-to-top"><IconArrowNarrowUp stroke={2} /> Back to top</span>
            </footer>
        </section>
    )
}