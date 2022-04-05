import styled from "styled-components";

export const Pages = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .pagination-item {
    border: 1px solid #b7bcce;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    margin-left: 12px;
    cursor: pointer;
    font-size: 12px;
    line-height: 14px;
    transition: all 0.2s;
    margin-bottom: 10px;

    &.disabled {
      opacity: 0.5;
      pointer-events: none;
    }
    &:hover {
      border-color: #1e86ff;
      color: #1e86ff;
    }
    &.active {
      border-color: #1e86ff;
      background-color: #1e86ff;
      color: #fff;
    }
  }

  ul,
  ol {
    padding-left: 20px;
  }
`
