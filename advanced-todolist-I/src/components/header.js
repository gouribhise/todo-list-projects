import React from 'react'

const Header = () => {
    const heading_style = {
        width: "50%",
        margin: "0 auto",
        backgroundColor: "#C1D37F",
        borderRadius: "30px",
        color: "white",
        fontWeight: "bold"
        
    }
    return (
        <div className="container">
            <h3 className="heading" style={heading_style}>Todo List</h3>
        </div>

    )
}

export default Header