import styled from "styled-components";

export const PostListContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem 5rem 2rem;

  .posts {
    max-width: 720px;
    margin: 3rem auto 0;

    a {
      display: block;

      & + a {
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid var(--gray-700);
      }

      time {
        font-size: 1rem;
        display: flex;
        align-items: center;
        color: var(--gray-300);
      }

      strong {
        display: block;
        font-size: 1.5rem;
        margin-top: 1rem;
        line-height: 2rem;

        transition: color 0.2s;
      }

      p {
        color: ${({ theme }) => theme.text};
        margin-top: 0.5rem;
        line-height: 1.625rem;
      }

      &:hover strong {
        color: var(--yellow-500);
      }
    }
  }
`;

export const PostContentContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem 4rem 2rem;

  .post {
    max-width: 850px;
    margin: 3rem auto 0 0;

    h1 {
      font-size: 3.5rem;
      font-weight: 900;
    }

    time {
      font-size: 1rem;
      color: var(--gray-300);
      margin-top: 1.5rem;
      display: block;
    }
  }
  .postContent {
    margin-top: 2rem;
    line-height: 2rem;
    font-size: 1.15rem;
    color: ${({ theme }) => theme.text};
    text-align: justify;

    .block-img {
      display: flex;
      img {
        max-width: 90%;
        margin: 0 auto;
        border-radius: 0.75rem;
      }
    }
    a {
      color: var(--cyan-500);
      font-weight: bold;
    }

    p,
    ul {
      margin: 1.5rem 0;
    }

    ul {
      padding-left: 1.5rem;
    }

    li {
      margin: 0.5rem 0;
    }

    pre {
      background-color: #08090a;
      border-radius: 0.5rem;
      padding: 1rem;
      margin: 1rem;
      white-space: pre-wrap;
      word-wrap: break-word;
      font-size: 0.95rem;
    }

    &.previewContent {
      background: linear-gradient(var(--gray-100), transparent);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media screen and (max-width: 768px) {
    .post {
      margin: 3rem auto 0;
      h1 {
        font-size: 2.5rem;
      }
    }
  }
`;
