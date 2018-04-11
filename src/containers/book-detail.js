import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }

    return (
      <div>
        <h1>Title: {this.props.book.title}</h1>
        <h3>Pages: {this.props.book.pages}</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    // the name of the prop is book
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
