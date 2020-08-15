import React, { useContext } from "react";
import styled from "styled-components";
import { SearchContext } from "../context/state";
import DependenciesList from "./DependenciesList";

export default () => {
  const { data } = useContext(SearchContext);

  return !data ? null : (
    <DependenciesWrapper>
      <DependenciesList title="Dependencies" data={data.devDependencies} />
      <DependenciesList title="Dev Dependencies" data={data.dependencies} />
    </DependenciesWrapper>
  );
};

const DependenciesWrapper = styled.section`
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: start;
`;
