import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h1>About 페이지</h1>
      <form onSubmit={handleSearch}>
        <p>검색어를 입력하여 검색하세요:</p>
        <input type="text" value={searchQuery} onChange={handleChange} />
        <button type="submit">검색</button>
      </form>
      <p>다른 페이지로 이동:</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
