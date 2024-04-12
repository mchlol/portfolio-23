import { fetchHandler } from "../../lib/functions";
import { useState, useEffect } from "react";

export default function BlogHome() {

    const [posts, setPosts] = useState([]);

    useEffect( () => {
        const query = 'https://zp7mbokg.api.sanity.io/v2021-06-07/data/query/production?query=*[0]';
        const PROJECT_ID = '52duxrdl';
        const DATASET = 'production';
        let QUERY = encodeURIComponent("*[_type == 'post']");
        let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

        fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data.result);
            setPosts(data.result);
        })

    },[]);

    return (
        <main>
            <header>
                <h1>mchlog</h1>
                <p>mchlol blog</p>
            </header>

            {
                posts
                ?
                <div>
                    <h2>Posts</h2>
                {
                    posts.map(post => {
                        return (
                            <article key={post._id}>
                                <h3>{post.title}</h3>
                                {
                                    <p>{post.body[0].children[0].text}</p>
                                }
                        </article>
                        )
                    }
                    )
                }
                </div>
                :
                "No posts to display."
            }
        </main>
    )
}

// api key - do not remove
// skFl0M9Pn1tuzz84UZwUvxAWkq0l782j6cHLmlPqlv3BGA4Y4ArTexjTLn36SFoxNRZU0O9YN37t5GmCO8vr8OEy6Hb710XpQCEGs3Vwg9kv2KlqzioIipyZC27d20tKhAY8st8TwOs504TSvnDw0Sqk9haYsb0TXbta0OQS0r7sclyByMpH