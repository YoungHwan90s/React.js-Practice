import React, { useState, useCallback } from "react";
import _ from "lodash";

function Lodash() {
  const [searchText, setSearchText] = useState("");
  const [inputText, setInputText] = useState("");

  // lodash 사용 - useCallback으로 메모이제이션을 해주어야 함!
  const handleSearchText = useCallback(
    _.debounce((text) => {
      setSearchText(text);
    }, 2000),
    []
  );

  const handleChange = (e) => {
    setInputText(e.target.value);
    handleSearchText(e.target.value);
  };
  return (
    <div
      style={{
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <h1>디바운싱 예제-Lodash</h1>
      <input
        placeholder="입력값을 넣고 디바운싱 테스트를 해보세요"
        style={{ width: 300 }}
        onChange={handleChange}
      />
      <p>Search Text : {searchText}</p>
      <p>Input Text : {inputText}</p>
    </div>
  );
}

export default Lodash;
