//social icons

import React from 'react';
import twitterLogo from "../images/twitter.png";
import githubLogo from "../images/github.png";
import facebookLogo from "../images/facebook.png"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="social-media">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href=".." >
                <img
                    src={githubLogo}
                    alt="Click to open Tasha's GitHub"
                    className="social-icons"
                    />
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="..">
                <img
                    src={twitterLogo}
                    alt="Click to open Amanda's Twitter"
                    className="social-icons"
                />
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="..">
                <img
                    src={facebookLogo}
                    alt="Click to open Amanda's Facebook"
                    className="social-icons"
                />
            </a>
            
        </div>
    </footer>
    );
}