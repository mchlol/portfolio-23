import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import createClient from "../../client";
import { formatDate } from "../../lib/functions";

export default function BlogHome() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {

        createClient
            .fetch(
            `*[_type == "post"]{
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
        .catch(console.error);


    },[]);



    return (
        <main>

                <h2 className="section-header">mchlog</h2>

                <div className="blog-wrapper text-center">
                <p>Mchlol + blog = mchlog.</p>
                {
                    loading
                    ? <h3>Loading...</h3>
                    :
                    posts
                    ?
                    posts.map((post, index) => (
                        <article key={post.slug.current}>
                            <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
                                <span key={index}>
                                    {
                                        post.mainImage &&
                                        <img src={post.mainImage.asset.url}
                                        alt="" />
                                    }
                                    <span>
                                        <h3>{post.title}</h3>
                                        <em>Posted {formatDate(post.publishedAt)}</em>
                                    </span>
                                </span>
                            </Link>
                            <p>{post.intro}</p>
                            <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
                                <button>Read</button>
                            </Link>
                        </article>
                    ))
                    :
                    'No posts to display'
                }
                </div>
        </main>
    )
};
