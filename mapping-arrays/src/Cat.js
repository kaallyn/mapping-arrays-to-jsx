import React, { Component } from 'react';

class Cat extends React.Component{
	render() {
		return(
			<div className="cat">
				<p className="cat-header"> {this.props.author} </p>
				<p className="cat-body"> {this.props.body} </p>
				<div className="cat-footer">
					<a href="#" className="cat-footer-delete"> Delete This Cat </a>
				</div>
			</div>
		);
	}
}

export default Cat;
