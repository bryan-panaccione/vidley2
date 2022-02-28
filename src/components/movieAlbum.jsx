import React, { Component } from "react";
import MovieCard from "./movieCard.jsx";
import { getMovies } from "../fakeMovieService.js";

class MovieAlbum extends Component {
  state = {
    movieList: getMovies(),
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
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    cardDel.remove();
  };
  render() {
    return (
      <div className="py-5 album">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {this.state.movieList.map((item, key) => {
              return (
                <div key={key} className="col">
                  <div className="card shadow-sm">
                    <div style={this.cardBody} className="card-body">
                      <div style={this.cardText}>
                        <h5> {item.title} </h5>
                        <p
                          align="left"
                          style={this.cardInfo}
                          className="card-text"
                        >
                          Number in Stock: {item.numberInStock}
                        </p>
                        <p
                          align="left"
                          style={this.cardInfo}
                          className="card-text"
                        >
                          Daily Rental Rate: {item.dailyRentalRate}
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
                          {item.genre.name}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                //   <li key={key}>{item.title}</li>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieAlbum;
