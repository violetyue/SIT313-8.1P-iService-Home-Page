import React from "react";
import { Icon } from "semantic-ui-react"
import './Footer.css'

function FooterConnect() {
    return (
        <div className="footerConnect">
            <div>
                <h2>CONNECT US</h2>
            </div>
            <div>
                <Icon name='facebook' size='big' />
                <Icon name='twitter' size='big' />
                <Icon name='instagram' size='big' />
            </div>           
        </div>
    )
}

export default FooterConnect