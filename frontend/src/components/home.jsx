import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const { data: books } = await axios.get("/backend/books");
    this.setState({ books });
  }

  render() {
    return (
      <div>
        <h1>All my books</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
