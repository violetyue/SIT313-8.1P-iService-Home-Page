import React from "react";
import { Button, Input } from "semantic-ui-react"
import './Footer.css'

function FooterSign() {
    return (
        <div className="footerSign">
            <div>
                <h2>NEWSELTTER SIGN</h2>
            </div>
            <div>
                <Input placeholder="Enter your email" />
            </div>
            <div>
                <Button secondary>Subscribe</Button>
            </div>    
        </div>
    )
}

export default FooterSign