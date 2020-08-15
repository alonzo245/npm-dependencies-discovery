import React, { useState, useContext } from "react";
import styled from "styled-components";
import useDebouncedCallback from "use-debounce/lib/useDebouncedCallback";
import { SearchContext } from "../context/SearchContext";
import LoadingSpinner from "../shared/LoadingSpinner/LoadingSpinner";

export default () => {
  const [inputValue, setInputValue] = useState("");
  const { searchPackage, loading } = useContext(SearchContext);
  const [debouncedFunction] = useDebouncedCallback((packageName = "") => {
    searchPackage(packageName);
  }, 1000);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setInputValue(value.replace(/^\s/g, ""));
    debouncedFunction(value);
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Enter npm package name like async..."
        value={inputValue}
        onChange={handleOnChange}
        disabled={loading}
      />
      {loading && <LoadingSpinner />}
    </div>
  );
};

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: white;
  background: transparent;
  border: none;
  border-bottom: 1px solid #555;
  font-size: 20px;
  outline: none;
  width: 100%;
`;
