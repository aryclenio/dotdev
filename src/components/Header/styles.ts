import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 4rem;
  border-bottom: 1px solid var(--gray-800);
  background-color: #242424;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  height: 4rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  img {
    width: 100px;
    cursor: pointer;
  }

  nav {
    margin-left: 5rem;
    height: 5rem;

    a {
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: 5rem;
      line-height: 5rem;
      color: #a8a8b3;
      transition: color 0.2s;

      & + a {
        margin-left: 2rem;
        @media screen and (max-width: 768px) {
          margin-left: 1rem;
        }
      }

      &:hover {
        color: #fafafa;
      }

      &.active {
        color: #fafafa;
        font-weight: bold;
      }

      &.active::after {
        content: "";
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: var(--yellow-500);
        bottom: 9px;
      }
    }
  }

  button {
    margin-left: auto;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 50px;
    }
    nav {
      margin-left: 1rem;
    }
  }
`;
