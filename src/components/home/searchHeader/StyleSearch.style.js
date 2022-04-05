import styled from "styled-components";

export const SearchStyle = styled.div`
  
    width: 100%;
    margin: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;


  input[type="text"] {
    width: 100%;
    min-height: 48px;
    border: 0;
    outline: none;
    font-family: "Poppins", sans-serif;
    margin-right: 4px;
  }

  .search-form {
    padding: 42px;
    border-radius: 8px;
  }

  .search-form form {
    width: 100%;
    margin: auto;
    max-width: 790px;
    display: flex;
    align-items: center;
    padding: 4px;
    color: #b9bdcf;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }

  .search-form form label {
    margin: 4px 8px;
  }

  input::placeholder {
    color: #b9bdcf;
    opacity: 1;
  }

  input::-moz-placeholder {
    color: #b9bdcf;
    opacity: 1;
  }

  /* button */
  .btn {
    min-width: 146px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    border: 0;
    background-color: transparent;
    border-radius: 4px;
    min-height: 48px;
    cursor: pointer;
    outline: none;
    transition: all 0.2s;
  }

  .btn:active {
    box-shadow: inset 0 0 10px rgba(0, 52, 112, 0.5);
  }

  .btn-primary {
    background: #1e86ff;
    color: #fff;
  }

  .btn-primary:hover {
    background: #0263d5;
  }
`;
