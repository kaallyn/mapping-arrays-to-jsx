import React, { Component } from 'react';
import Cat from './Cat.js';

class CatBox extends React.Component {
	render() {
		const cats = this._getCats();
		return(
			<div className="cat-box">
				<h3>Cats Comments</h3>
				<h4 className="cat-count">{this._getCatsTitle(cats.length)}</h4>
				<div className="cat-list">
					{cats}
					{/* {cats} above is the prop hat populates the catList array into the the cat-box html div*/ }
				</div>
			</div>
		);
	}

  // underscore distinguishes custom user-made methods from native React methods
  	_getCats() {
  	// above is new method that will return array of jsx elements
  		const catList = [
  			{ id: 1, author: 'Jeff Lebowski', body: 'It really tied the room together.' },
  			{ id: 2, author: 'Walter', body: 'Take the ringer!' }
  		];

  		return catList.map((cat) => {
  		// line above returns an array of catList
  		// above, each element of catList is passed through as an argument called cat
  			return (
  				<Cat
  				// with a new component (Comment) built for each element in commentList
  					author={cat.author}	body={cat.body}	key={cat.id}	/>
  					// Here we use the argument (called comment) to access the properties of each element in commentList, therby passing them through as props. IMPORTANT: you always need a KEY element to keep track of the id of each element in your array commentList
  			);

  		});

  	}

  	// below is new method to adjust grammar (singuler vs plural) of the h4 based on how many cats there are

  	_getCatsTitle(catCount) {
  		if (catCount === 0){
  			return `No cats yet`;
  		} else if (catCount === 1){
  			return `1 cat`;
  		} else {
  			return `${catCount}  cats`
  		}
  	}
  }



export default CatBox;
