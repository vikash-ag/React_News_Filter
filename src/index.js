import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import NewsList from './components/news_list';
import Footer from './components/footer';

import JSON from './db.json';
import './styles/styles.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            news : JSON,
            footerText: 'This is the parent footer',
            filtered: []
        };
    }

    getKeywords = (event) => {
        //Serach the keyword from newslist
        let keywords = event.target.value;
        let filtered = this.state.news.filter( (item) => {
            let str = (item.title).toLowerCase();
            return str.indexOf(keywords.toLowerCase()) > -1;
        } )

        //Set the filtered news to the list
        this.setState({
            filtered
        })
    }

    render(){
        const state = this.state;
        let newsFiltered = state.filtered;
        let newsAll = state.news;

        return(
            <>
            <Header keywords={this.getKeywords}/>
            <NewsList
                news={newsFiltered.length === 0 ? newsAll : newsFiltered}
                hello={true}        
            />
            <Footer footerText={state.footerText}/>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));