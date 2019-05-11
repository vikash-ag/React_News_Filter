import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <header>
                <div    className="logo"
                        onClick={this.helloFunction}
                >New Logo
                </div>
                
                <input  onChange={this.props.keywords} />
            </header>
        )
    }
}

export default Header;















    // state = {
    //     active:'active',
    //     keywords :''
    // }

    // inputChange(event){
    //     const value = event.target.value === '' ? 'active' : 'not-active';
    //     this.setState({
    //         active:value,
    //         keywords : event.target.value
    //     });
    // }