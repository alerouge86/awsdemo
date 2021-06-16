import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    // test 1
    try {
      console.log("test 1 - /backend/books");
      const { data: books } = await axios.get("/backend/books");
    } catch (error) {
      console.log("error 2: ", error);
    }

    // test 2
    try {
      console.log("test 2 - /localhost/books");
      const { data: books } = await axios.get("/localhost/books");
    } catch (error) {
      console.log("error 2: ", error);
    }

    // test 3
    try {
      console.log("test 3 - /localhost:8081/books");
      const { data: books } = await axios.get("/localhost:8081/books");
    } catch (error) {
      console.log("error 3: ", error);
    }

    // test 4
    try {
      console.log("test 4 - /localhost:5000/books");
      const { data: books } = await axios.get("/localhost:5000/books");
    } catch (error) {
      console.log("error 4: ", error);
    }

    this.setState({ books });
  }

  render() {
    return (
      <div>
        <h1>All my books (2.3)</h1>
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
