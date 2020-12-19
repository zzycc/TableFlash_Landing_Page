import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from './Navigation.js'
import Menu from './menu.js'
class Landing extends React.Component{
    render(){
        return (
            <Container>
                <Menu/>
                <Navigation/>
            </Container>
        )
    }
}
export default Landing