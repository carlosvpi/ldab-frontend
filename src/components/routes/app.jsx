import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home.jsx';
import About from './about.jsx';
import Author from './author.jsx';
import Story from './story.jsx';
import News from './news.jsx';
import Contact from './contact.jsx';

import Itemize from '../elements/itemize.jsx'

export default class App extends Component {
	render() {
		return <Router>
			<div>
				<Itemize>
					<Link to='/about'>Quienes somos</Link>
					<Link to='/story'>Relatos</Link>
					<Link to='/news'>Noticias</Link>
					<Link to='/contact'>Contacto</Link>
				</Itemize>
				<Route exact path='/' component={ Home } />
				<Route path='/about' component={ About } />
				<Route path='/author' component={ Author } />
				<Route path='/author/:id' component={ Author } />
				<Route path='/story' component={ Story } />
				<Route path='/story/:id' component={ Story } />
				<Route path='/news' component={ News } />
				<Route path='/news/:id' component={ News } />
				<Route path='/contact' component={ Contact } />
			</div>
		</Router>;
	}
}