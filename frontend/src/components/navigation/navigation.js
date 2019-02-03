import React from 'react';
import {Menu, Header, Message, Button} from  'semantic-ui-react';
import logo from '../../assets/logo.png';
import './navigation.css';
import $ from 'jquery';

export default class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scrolled:false
        }
    }
    componentDidMount(){
        $(window).scroll(function(){
            if($(window).scrollTop() > 50){
                $('.navigation').addClass('scrolled');
            }else{
                $('.navigation,.landing-page').removeClass('scrolled');
            }
        })
    }

    render(){
        return(
            <div className={`navigation ${this.state.scrolled}`}>
                <img src={logo} alt="Site logo" className="logo"/>
            <Header as='h1'>Diary Of Life</Header>
            <Header as="h3">Stories of life that connect us all</Header>
            <div className="useractions">
            <Button content="Sign up"></Button>
            <Button content="Sign in"></Button>
            </div>
            </div>
        );
    }
}