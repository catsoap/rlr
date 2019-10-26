import React, { Component } from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="App">
        <div className="mb2">
          <Search value={searchTerm} onChange={this.onSearchChange}>
            Search
          </Search>
        </div>
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    );
  }
}

const Button = ({ onClick, className = '', children }) => (
  <button onClick={onClick} className={className} type="button">
    {children}
  </button>
);

const Search = ({ value, onChange, children }) => (
  <form>
    <span className="fw6">{children} </span>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="input-reset ba b--black-20 pa2"
    />
  </form>
);

const Table = ({ list, pattern, onDismiss }) => (
  <div className="f6">
    {list.filter(isSearched(pattern)).map(item => (
      <div key={item.objectID}>
        <span className="pa1">
          <a href={item.url}>{item.title}</a>
        </span>
        <span className="pa1">{item.author}</span>
        <span className="pa1">{item.num_comments}</span>
        <span className="pa1">{item.points}</span>
        <span className="pa1">
          <Button onClick={() => onDismiss(item.objectID)} className="pa1 br2 fw6 black-70 pointer">
            Dismiss
          </Button>
        </span>
      </div>
    ))}
  </div>
);

export default App;
