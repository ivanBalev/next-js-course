import Head from "next/head";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

export default function PostDetailPage({ post }) {
    return <>
        <Head>
            <title>{post.title}</title>
            <meta name='description' content={post.excerpt} />
        </Head>
        <PostContent post={post} />
    </>
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const postFileNames = getPostsFiles();

    const slugs = postFileNames.map(x => x.replace(/\.md$/, ''));

    return {
        paths: slugs.map(s => ({ params: { slug: s } })),
        fallback: false
    }
}