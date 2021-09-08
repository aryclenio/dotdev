
import { GetServerSideProps } from "next"
import Head from "next/head"
import { RichText } from "prismic-dom"
import { getPrismicClient } from "../../services/prismic"
import markdownToHtml from "../../utils/markdownToHtml";
import styles from './post.module.scss';

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

export default function Post({ post }: PostProps) {
  console.log(post.content)
  return (
    <>
      <Head>
        <title>{post.title} | UnReact </title>
      </Head>
      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className={styles.postContent}
          />
        </article>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { slug } = params;

  const prismic = getPrismicClient(req)
  const response = await prismic.getByUID('publication', String(slug), {})
  const contentToMarkdown = await markdownToHtml(RichText.asText(response.data.content))
  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: contentToMarkdown,
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
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
