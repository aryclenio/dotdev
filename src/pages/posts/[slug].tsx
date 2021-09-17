
import { GetServerSideProps } from "next"
import Head from "next/head"
import { RichText } from "prismic-dom"
import { useEffect } from "react";
import { getPrismicClient } from "../../services/prismic"
import { htmlSerializer, linkResolver } from "../../utils/htmlSerializer";
import Prism from 'prismjs'
import styled from 'styled-components'

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

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

export default function Post({ post }: PostProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, [])

  return (
    <>
      <Head>
        <title>{post.title} | .dev Blog </title>
      </Head>
      <PostContentContainer>
        <article className="post">
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="postContent"
          />
        </article>
      </PostContentContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { slug } = params;

  const prismic = getPrismicClient(req)
  const response = await prismic.getByUID('publication', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content, linkResolver, htmlSerializer),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }
  return {
    props: {
      post,
    }
  }

}
