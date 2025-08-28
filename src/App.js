import axios from "axios";
import React, { useState, useEffect } from "react";
import "./styles.css"
function App() {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function query() {
      const response = await axios.get("https://randomuser.me/api?results=20");
      setUsers(response.data.results);
    }
    query();
  }, []);

  const filterName = users.filter((user) => 
    (user.name.first + " " + user.name.last)
      .toLowerCase()
      .includes(text.toLocaleLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="content">
        {text
          ? filterName.map((user, index) => {
              return <p key={index}>{user.name.first}</p>;
            })
          : null}
      </div>
    </div>
  );
}

export default App;
