import React, { Component } from "react";
import * as MovieBear from "../fakeMovieService.js";

class MovieCard extends Component {
  state = {
    img: "https://picsum.photos/400/200",
  };

  cardBody = {
    color: "black",
  };

  cardText = {
    display: "flex",
    marginBottom: 40,
    flexDirection: "column",
    alignItems: "flex-start",
  };

  cardInfo = {
    fontSize: 15,
  };

  cardBottom = {
    width: 100,
    fontSize: 15,
  };

  eraseCard = (e) => {
    const cardDel =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode
        .parentNode;
    cardDel.remove();
  };
  render() {
    return (
      <div className="col">
        <div className="card shadow-sm">
          <img
            src={this.state.img}
            alt="bryanPic"
            className="bd-placeholder-img card-img-top"
            width="100%"
            focusable="false"
          ></img>

          <div style={this.cardBody} className="card-body">
            <div style={this.cardText}>
              <h5> {this.title} </h5>
              <p align="left" style={this.cardInfo} className="card-text">
                {this._id}
              </p>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary delButt"
                  onClick={this.eraseCard.bind(this)}
                >
                  Delete
                </button>
              </div>
              <small style={this.cardBottom} className="text-muted">
                Adventure
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
