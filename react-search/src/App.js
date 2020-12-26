import './App.scss';
import React from 'react';


class Post {
  constructor(title, link, author, img) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.img = img;
  }
}

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }
  handleChange = (e) => {
    this.setState({ keyword: e.target.value });
  };
  toggleOnOff() {
    this.onOff = !this.onOff;
  }
  filteredList() {
    return this.props.postLink.filter((post) => {
      return post.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
  }

  render() {
    console.log(this.props.postLink);
    // console.log(this.state.value);
    // console.log(this.filteredList());
    return (
      <div class="search-wrapper">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search Keyword ..."
        />
        <label>Search Title</label>
        <h1>React Clone</h1>
        <div class="wrapper">
          {this.filteredList().map((post) => (
            <div class="card">
              <a href={post.link}>
                <img src={post.img} alt={post.title} />
                <small> Posted by {post.author} </small>
                {post.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="app">
      <PostList
        name="Erlich Bachman"
        postLink={[
          new Post(
            "Vue.js",
            "https://vuejs.org/",
            "Chris",
            "https://vuejs.org//images/logo.png"
          ),
          new Post(
            "React.js",
            "https://facebook.github.io/react/",
            "Tim",
            "http://daynin.github.io/clojurescript-presentation/img/react-logo.png"
          ),
          new Post(
            "Angular.js",
            "https://angularjs.org/",
            "Sam",
            "https://angularjs.org/img/ng-logo.png"
          ),
          new Post(
            "Ember.js",
            "http://emberjs.com/",
            "Rachel",
            "http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200"
          ),
          new Post(
            "Meteor.js",
            "https://www.meteor.com/",
            "Chris",
            "http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png"
          ),
          new Post(
            "Aurelia",
            "http://aurelia.io/",
            "Tim",
            "https://cdn.auth0.com/blog/aurelia-logo.png"
          ),
          new Post(
            "Node.js",
            "https://nodejs.org/en/",
            "A. A. Ron",
            "https://code-maven.com/img/node.png"
          ),
          new Post(
            "Pusher",
            "https://pusher.com/",
            "Alex",
            "https://avatars1.githubusercontent.com/u/739550?v=3&s=400"
          ),
          new Post(
            "Feathers.js",
            "http://feathersjs.com/",
            "Chuck",
            "https://cdn.worldvectorlogo.com/logos/feathersjs.svg"
          )
        ]}
      />
    </div>
  );
}
export default App;
