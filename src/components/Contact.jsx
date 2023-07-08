import React from 'react'

const Contact = () => {
    return (
        <div className="contact-page">
            <main>
                <h1>Contact Us</h1>
                <form>
                    <div>
                        <input type="text" required placeholder="Enter your name " />
                        <input type="email" required placeholder="Enter your email" />
                        <textarea required placeholder="Message" cols="30" rows="10"/>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </main>
        </div>
    )
}

export default Contact