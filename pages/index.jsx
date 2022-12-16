import Head from 'next/head';
import Layout, {siteTitle} from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import {getSortedPostsData} from '../lib/posts';
import Link from "next/link";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();

    // if data undefined go to 404page
    if (!allPostsData) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            allPostsData,
        },
    };
}


export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={utilStyles.headingMd}>
                <p>Hi! Here we're trying to do some magic</p>

                <Link href="posts/first-post" >Push</Link>

                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>

            <Link href="posts/1"><p className={utilStyles['list-of-users']}>go to user 1</p></Link>
            <Link href="posts/2"><p className={utilStyles['list-of-users']}>go to user 2</p></Link>
            <Link href="posts/3"><p className={utilStyles['list-of-users']}>go to user 3</p></Link>
            <Link href="posts/4"><p className={utilStyles['list-of-users']}>go to user 4</p></Link>
            <Link href="posts/5"><p className={utilStyles['list-of-users']}>go to user 5</p></Link>
            <Link href="posts/6"><p className={utilStyles['list-of-users']}>go to user 6</p></Link>
            <Link href="posts/7"><p className={utilStyles['list-of-users']}>go to user 7</p></Link>
            <Link href="posts/8"><p className={utilStyles['list-of-users']}>go to user 8</p></Link>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
