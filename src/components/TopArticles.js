import FlipMove from 'react-flip-move';
import React, {Component} from 'react'

const articles =[{id: 0, article: 'art1'}, {id:1, article: 'art2'}]


class TopArticles extends Component {
  renderTopArticles() {
    return articles.map( article => <Article {...article} key={article.id} /> );
  }

  render() {
    return (
      <div className="top-articles">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <FlipMove easing="cubic-bezier(0, 0.7, 0.8, 0.1)">
          { this.renderTopArticles() }
        </FlipMove>
      </div>
    );
  }
}

export default TopArticles