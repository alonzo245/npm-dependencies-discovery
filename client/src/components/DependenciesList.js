import React from "react";
import styled from "styled-components";

export default ({ data = null, title }) => {
  return (
    <div>
      <h4>{title}</h4>
      <List>
        {!data ? (<div>No Results.</div>) : 
          (Object.keys(data).length > 0 &&
          Object.keys(data || []).map((dependency, i) => (
            <Item key={i}>
              {dependency} : {data[dependency]}
            </Item>
          )))}
      </List>
    </div>
  );
};

const List = styled.ul`
  list-style: none;
`;

const Item = styled.li``;
