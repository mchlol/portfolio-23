import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import createClient from "../../client";
import { formatDate } from "../../lib/functions";
import Loading from "../../components/Loading";

export default function BlogHome() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {

        createClient
            .fetch(
            `*[_type == "post"] | order(publishedAt desc){
                title,
                slug,
                intro,
                publishedAt,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
            }`
        )
        .then( (data) => {
            setPosts(data)
            setLoading(false)
            

        })
        .catch(err => console.log('Error: ',err));


    },[]);



    return (
        <main>

                <h2 className="section-header">blog</h2>

                <div className="blog-wrapper text-center">
                {
                    !loading
                    ? <Loading />
                    :
                    posts.length > 0
                    ?
                    <section className="posts-wrapper">
                        {posts.map((post) => (
                            <article key={post.slug.current} className="gradient-border">

                                <div className="post-header">
                                    <Link to={"/blog/" + post.slug.current}>
                                        {
                                            post.mainImage &&
                                            <img src={post.mainImage.asset.url}
                                            alt="blog post preview image" />
                                        }
                                    </Link>
                                </div>

                                <div className="post-preview">
                                    <div className="post-preview-header">
                                        <h3><Link to={"/blog/" + post.slug.current}>{post.title}</Link></h3>
                                        <small>Posted {formatDate(post.publishedAt)}</small>
                                    </div>
                                    <p>{post.intro}</p>
                                    <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
                                        <button>Read</button>
                                    </Link>
                                </div>

                            </article>
                        ))}
                    </section>
                    
                    : <p className="no-posts-wrapper">No posts to display.</p>
                }
                </div>
        </main>
    )
};
