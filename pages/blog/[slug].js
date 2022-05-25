import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css';
import React , { useState  } from 'react';
import Head from 'next/head'

const Slug = (props) => {
    
    
    const [blogItem , setBlogItem] = useState(props.blog)

    return (
        <>
            <Head>
                <title>{blogItem?.title} Blog</title>
                <meta name="description" content="All Blog Here" />
                <meta name="keywords" content="Blog Programming" />
            </Head>
            <main className={styles.main}>
                <article>
                    <h3>{blogItem?.title}</h3>
                    <p>
                        {blogItem?.body}
                    </p>
                </article>
            </main>
        </>
    );
};

export async function getStaticPaths() {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    const paths = data.map( blog => ({
        params :{
            slug : blog.id.toString()
        }
    }))
  return {
    paths,
    fallback: false // false or 'blocking'
  };
}

export async function getStaticProps(context){
    
    const {slug} = context.params;
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    const blog = await data.json()
    // console.log(blogItem);

    return {
        props: {blog}
    }
}

export default Slug;