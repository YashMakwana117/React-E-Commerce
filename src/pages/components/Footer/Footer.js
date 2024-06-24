import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-content">
                    <div className="newsletter">
                        <h2>Subscribe to our newsletter</h2>
                        <input type="email" placeholder="Your email address" />
                        <button>Subscribe</button>
                    </div>
                    <div className="footer-links">
                        <div className="support">Support</div>
                        <div className="legal">Legal</div>
                        <div className="contact">
                            <p>Surat, Gujarat</p>
                            <p>info@cygnux.in</p>
                            <p>9898989898</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
