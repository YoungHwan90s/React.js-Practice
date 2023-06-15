import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData([...json]);
        return;
      });
  }, [data]);

  return (
    <div>
      <h3>json-test-app</h3>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            style={{ border: "1px solid black", margin: "5px" }}
          >
            <ul>
              <li>userId = {item.userId}</li>
              <li>itemId = {item.id}</li>
              <li>title = {item.title}</li>
              <li>body = {item.body}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
