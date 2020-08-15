import React, { useContext } from "react";
import styled from "styled-components";
import { SearchContext } from "../context/SearchContext";
import DependenciesList from "./DependenciesList";

export default () => {
  const { data, error } = useContext(SearchContext);

  return !data ? (
    error ? (
      <NoResults>Try to search again...</NoResults>
    ) : null
  ) : (
    <DependenciesWrapper>
      <DependenciesList title="Dependencies" data={data.devDependencies} />
      <DependenciesList title="Dev Dependencies" data={data.dependencies} />
    </DependenciesWrapper>
  );
};

const NoResults = styled.section`
  color: white;
  margin: 0 20px;
`;

const DependenciesWrapper = styled.section`
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: start;
`;
