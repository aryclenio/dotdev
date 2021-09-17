import { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';

import { getPrismicClient } from '../../services/prismic';

import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import styled from 'styled-components'

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}
interface PostsProps {
  posts: Post[]
}

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

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title> Posts | .dev Blog </title>
      </Head>

      <PostListContainer>
        <div className="posts">
          {posts?.map(post => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <a href="#" key={post.slug}>
                <time> {post.updatedAt} </time>
                <strong> {post.title} </strong>
                <p> {post.excerpt} </p>
              </a>
            </Link>
          ))}
        </div>
      </PostListContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  }
  )

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.first_publication_date).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })


  return {
    props: {
      posts
    }
  }
}