import React from 'react'
import {Link, Switch, Route} from 'react-router-dom';

function NavbarItem(props){
    return (
    <Link className='navbar-item' to={props.to}>{props.name}</Link>
    )
}

function Navbar(props){
return <nav><ul className='navbar'>{props.children}</ul></nav>
}

function About(props){
    return <div>About</div>
}

function Contact(props){
    return <div>Contact</div>
}

function Home(props){
    return <div>Home</div>
}


export default function App(){
    return <div>
        <Navbar>
                <NavbarItem name='Home' to='/'/>
                <NavbarItem name='About' to='/about'/>
                <NavbarItem name='Contact' to='/contact'/>
        </Navbar>
        <Switch>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact} />
            <Route path='/' component={Home} />
        </Switch>
    </div>
}