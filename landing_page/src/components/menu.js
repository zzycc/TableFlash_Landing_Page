import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './menu.css'
let menu = require('../food.json')
class Menu extends React.Component{
    render(){

        let col_menu = menu.map(function(cur){
            return (
                <Col>
                    <a href={cur.url}>
                        <div class="card_img">
                            <img alt="" src = {cur.id} class="card_img"/>
                        </div>
                    </a>
                </Col>
            )
        })
        let i = 0
        let append_col=[];
        for(i=0;i<col_menu.length;i+=3){
            append_col[i/3] = <Row>{col_menu[i]} {col_menu[i+1]} {col_menu[i+2]}</Row>
        }
        return (
            append_col
        )
    }
}

export default Menu