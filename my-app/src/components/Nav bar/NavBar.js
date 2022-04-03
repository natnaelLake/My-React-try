import React, { Component } from 'react'
import ButtonContext from '../Context/ButtonContext'
import UserContext from '../Context/UserContext';
class NavBar extends Component {
    static contextType = ButtonContext;
  render() {
    return (
        <div>
            <ButtonContext.Consumer>
                {
                    value => {
                        return <a href="/#">{this.context}</a>
                    }

                }
            </ButtonContext.Consumer>
            <UserContext.Consumer>
                {
                    userValue => {
                        return <div></div>
                    }
                }
             </UserContext.Consumer>
        </div>
    )
  }
}
export default NavBar