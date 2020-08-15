import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { SearchProvider } from "./context/SearchContext";
import Dependencies from "./components/Dependencies";

export default () => {
  return (
    <SearchProvider>
      <Wrapper>
        <Header />
        <Dependencies />
      </Wrapper>
    </SearchProvider>
  );
};

const Wrapper = styled.div`
  max-width: 700px;
  margin: 20px auto;
`;
