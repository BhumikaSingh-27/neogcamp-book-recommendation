import "./styles.css";
import React, { useState } from "react";

const books = {
  JS: [
    { name: "Eloquent JavaScript", rating: "4.5/5" },
    { name: "JavaScript- The Good Parts", rating: "4.2/5" }
  ],
  Fiction: [
    { name: "Shiva Trilogy", rating: "5/5" },
    { name: "Harry Potter and the Sorcerer's Stone", rating: "4.5/5" }
  ],
  SH: [
    { name: "Think Like a Monk", rating: "4.6/5" },
    { name: "The 5AM Club", rating: "4.5/5" }
  ]
};

export default function App() {
  var [genre, setGenre] = useState("JS");

  function genreHandler(genre) {
    setGenre(genre);
    // console.log(books[genre]);
    // console.log(genre);
  }

  return (
    <div
      className="App"
      style={{
        // backgroundColor: "#e2e8f0",
        display: "block",
        margin: "auto",
        width: "40%"
        // height: "100%"
      }}
    >
      <h1>📚goodBooks</h1>
      <div>
        <p>Checkout my favourite books. Select a genre to know more.</p>

        <button
          onClick={() => genreHandler("JS")}
          style={{
            backgroundColor: "#e2e8f0",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
            marginRight: "1rem"
          }}
        >
          {" "}
          Javascript
        </button>
        <button
          onClick={() => genreHandler("Fiction")}
          style={{
            backgroundColor: "#e2e8f0",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
            marginRight: "1rem"
          }}
        >
          Fiction
        </button>
        <button
          onClick={() => genreHandler("SH")}
          style={{
            backgroundColor: "#e2e8f0",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
            marginRight: "1rem"
          }}
        >
          Self-help
        </button>
      </div>

      <div>
        <ul>
          <hr />
          {books[genre].map((book) => (
            <li
              key={book.name}
              style={{
                border: "1px solid black",
                listStyle: "none",
                padding: "1rem",
                margin: "1rem",
                borderRadius: "0.5rem",
                textAlign: "left",
                width: "70%"
                // textAlign: "center"
              }}
            >
              <div style={{ fontWeight: "bold" }}>{book.name}</div>
              <div>{book.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
