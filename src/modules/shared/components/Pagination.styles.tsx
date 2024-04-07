import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const PaginationContainer = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  li:first-of-type,
  li:last-of-type {
    font-weight: 600;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    padding: 10px;
    border-radius: 50%;
    list-style: none;
    cursor: pointer;
  }

  .selected {
    background-color: #929292;
  }
`;
