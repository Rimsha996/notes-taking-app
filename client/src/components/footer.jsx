import React from "react";

function Footer(){
    return(
        <footer className="bg-gray-700 text-white h-8 text-center mt-auto">
            <span>{(new Date()).getFullYear()}</span>
        </footer>
    )
}

export default Footer;