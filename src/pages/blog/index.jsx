import { fetchHandler } from "../../lib/functions";
import { useState, useEffect } from "react";
import { HiSparkles } from "react-icons/hi2";
import { Link } from "react-router-dom";
import createClient from "../../client"

export default function BlogHome() {

    const [posts, setPosts] = useState([]);

    useEffect( () => {

        console.log('useEffect running...')
        createClient
            .fetch(
            `*[_type == "post"]{
                title,
                slug,
                _createdAt,
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
            console.log('posts are set')
            console.log('posts: ',posts);

        })
        .catch(console.error);


    },[]);


    return (
        <main>

                <h2 className="section-header">mchlog</h2>

                <div className="blog-wrapper">
                {
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
                                        <em>Date: {post._createdAt}</em>
                                    </span>
                                </span>
                            </Link>
                            <p>Preview text go here!</p>
                        </article>
                    ))
                    :
                    'No posts to display'
                }
                </div>
        </main>
    )
}
