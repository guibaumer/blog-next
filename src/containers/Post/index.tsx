import styles from './styles.module.css';
import { PostAttributesData, PostData } from "@/domain/posts/post"
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heading } from '@/components/Heading';
import { PostCover } from '@/components/PostCover';
import PostDetails from '@/components/PostDetails';
import Comments from '@/components/Comments';
import Head from 'next/head';

export type PostProps = {
    post: PostAttributesData;
    text: BlocksContent;
}

export function Post({ post, text }: PostProps) {
let url = post.cover.data.attributes.formats?.small?.url || post.cover.data.attributes.url || '';


  return (
    <>
      <Head>
            <title>POPOPOPO</title>
      </Head>
      <Header />
      <Heading>{post.title}</Heading>
      <PostCover
        url={url}
        // url={post.cover?.data?.attributes?.formats?.small?.url || post.cover?.data?.attributes?.url}

        alt={post.title}
      />
      <PostDetails
        author={post.author.data.attributes.name}
        category={post.category.data.attributes.name}
        date={post.createdAt}
      />
      <BlocksRenderer
        content={text}
        blocks={{
          paragraph: ({ children }) => (
            <p className={styles.p}>{children}</p>
          ),
          heading: ({ children, level }) => {
            switch (level) {
              case 1:
                return <h1 className={styles.h1}>{children}</h1>;
              case 2:
                return <h2 className={styles.h2}>{children}</h2>;
              case 3:
                return <h3 className={styles.h3}>{children}</h3>
              default:
                return <h4 className={styles.h4}>{children}</h4>; // Fallback
            }
          }
        }}
      />
      <Comments title={post.title} slug={post.slug} />
      <Footer />
    </>
  )
}