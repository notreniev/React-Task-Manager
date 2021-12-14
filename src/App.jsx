import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TaskDetails from './components/task/TaskDetails';
import Home from './components/home/Home';

function App(){
    return (
		<Router>
			<div className="container">
				<Header />
                <Route path="/" exact={true} component={Home} />
                <Route path="/:taskTitle" exact component={TaskDetails} />
			</div>
		</Router>
	);
};

export default App;