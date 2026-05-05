import React, { useState } from "react";
import "./library.css";

const libraryData = [
  {
    id: 1,
    title: "Introduction to Programming",
    author: "Dennis Ritchie",
    category: "Computer Science",
    type: "PDF",
    level: "Beginner",
    file: "#"
  },
  {
    id: 2,
    title: "Database Management Systems",
    author: "Elmasri & Navathe",
    category: "Computer Science",
    type: "PDF",
    level: "Intermediate",
    file: "#"
  },
  {
    id: 3,
    title: "Principles of Marketing",
    author: "Philip Kotler",
    category: "Business",
    type: "PDF",
    level: "Beginner",
    file: "#"
  },
  {
    id: 4,
    title: "Computer Networks",
    author: "Andrew Tanenbaum",
    category: "IT",
    type: "PDF",
    level: "Advanced",
    file: "#"
  },
  {
    id: 5,
    title: "Financial Accounting Basics",
    author: "Robert Smith",
    category: "Finance",
    type: "PDF",
    level: "Beginner",
    file: "#"
  }
];

const Library = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredBooks = libraryData.filter((book) => {
    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchCategory = filter === "All" || book.category === filter;

    return matchSearch && matchCategory;
  });

  return (
    <div className="container py-5">

      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">University Digital Library</h2>
        <p className="text-muted">
          Access academic books, research materials, and learning resources
        </p>
      </div>

      {/* Controls */}
      <div className="row mb-4">

        {/* Search */}
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search books by title or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filter */}
        <div className="col-md-6">
          <select
            className="form-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Business">Business</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
          </select>
        </div>

      </div>

      {/* Books Grid */}
      <div className="row g-3">

        {filteredBooks.map((book) => (
          <div className="col-md-4" key={book.id}>
            <div className="library-card p-3 h-100">

              <h5 className="fw-bold">{book.title}</h5>

              <p className="mb-1 text-muted">
                Author: {book.author}
              </p>

              <div className="d-flex gap-2 mb-2 flex-wrap">
                <span className="badge bg-primary">{book.category}</span>
                <span className="badge bg-secondary">{book.level}</span>
                <span className="badge bg-dark">{book.type}</span>
              </div>

              <a href={book.file} className="btn btn-warning w-100 fw-semibold">
                Open Resource
              </a>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Library;