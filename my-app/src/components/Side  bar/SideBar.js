import React, { Component } from 'react'
import NavBar from '../Nav bar/NavBar'
import ButtonContext from '../Context/ButtonContext'
class SideBar extends Component {
  render() {
    return (
        <div>
            <ButtonContext.Provider value = 'Navigaation Context value'>
                    <NavBar />
            </ButtonContext.Provider>
            
        </div>
    )
  }
}

export default SideBar