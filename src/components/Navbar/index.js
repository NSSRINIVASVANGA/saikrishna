import {Component} from 'react'
import './index.css'

class Navbar extends Component{
    state = {showHam : true,shwPopup : false}

    clickHam = () => {
        const{showHam,shwPopup} = this.state
        this.setState({showHam : !showHam,shwPopup:!shwPopup})
    }

    render(){
        const{showHam,shwPopup} = this.state
        return(
            <>
                <nav className = "navbar">
                    <img src = "https://res.cloudinary.com/dpfnim7rk/image/upload/v1729747933/logo_6514051e85aa74-51802320_jciawq.png" alt = "logo" className = "logo"/>
                    <div className = "nav-items">
                        <a className = "link-el" href = "#"> Home </a>
                        <a className = "link-el" href = "#"> About </a>
                        <a className = "link-el" href = "#"> Log In </a>
                    </div>
                    <div className = "icon-con">
                        {showHam ? <button className = "button" onClick = {this.clickHam}> <img src = "https://res.cloudinary.com/dpfnim7rk/image/upload/v1730163503/th_1_satcps.jpg" alt = "icon" className = "icon"/> </button> :
                        <button className = "button" onClick = {this.clickHam}> <img src = "https://res.cloudinary.com/dpfnim7rk/image/upload/v1730165084/pngtree-vector-cross-icon-png-image_956622_esccd6.jpg" alt = "icon" className = "icon"/> </button>}
                    </div>
                </nav>
                <div className = "sec-2">
                    {shwPopup &&
                    <div className = "new-nav-items">
                        <a className = "link-el" href = "#"> Home </a>
                        <a className = "link-el" href = "#"> About </a>
                        <a className = "link-el" href = "#"> Log In </a>
                    </div>
                    }
                </div>
            </>
        )
    }
}

export default Navbar