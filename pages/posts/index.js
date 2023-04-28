import Head from "next/head";
import AllPosts from "../../components/posts/all-posts"
import { getAllPosts } from "../../lib/posts-util"

export default function AllPostsPage({ posts }) {
    return (
        <>
        <Head>
            <title>All posts</title>
            <meta name='description' content='A list of all tutorials' />
        </Head>
            <AllPosts posts={posts} />
        </>)
}

export function getStaticProps() {
    const posts = getAllPosts();

    return {
        props: {
            posts: posts
        },
        revalidate: 1800
    }
}