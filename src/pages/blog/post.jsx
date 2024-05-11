import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../../client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import {getImageDimensions} from '@sanity/asset-utils';
import { NavLink } from "react-router-dom";
import { formatDate } from "../../lib/functions";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

const imageComponent = ({value}) => {
    const {width, height} = getImageDimensions(value);

    return (
        <img 
            src={imageUrlBuilder(client)
            .image(value)
            .fit('max')
            .auto('format')
            .url()}
            alt={value.alt || ' '}
            loading="lazy"
        />
    )
}

const myComponents = {
    types: {
        image: imageComponent,
    }
}

export default function SinglePost() {

    const [postData, setPostData] = useState(null);
    const { slug } = useParams();

    useEffect( () => {
        client.fetch(
            `*[slug.current == $slug]{
                title, 
                slug,
                publishedAt,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                body,
                "name": author->name,
                "authorImage": author->image,
            }`,
            { slug }
        )
        .then( (data) => {
            setPostData(data[0])
        })
        .catch(err => console.log('Error: ',err));
    },[slug]);

    return (
        <main>
            {
                postData
                ? 
                <article className="single-post-wrapper">

                    <div className="single-post-header">              
                        <img className="single-post-header-img" src={urlFor(postData.mainImage).url()} alt={postData.title} />

                        <div className="single-post-details">
                            <h2>{postData.title}</h2>

                            <div className="date-author-wrap">
                            <span>Posted {formatDate(postData.publishedAt)} by </span>

                                <img className="author-img" src={urlFor(postData.authorImage).width(100).url()} alt={postData.name} />
                                
                                <strong>{postData.name}</strong>
                            </div>
                        </div>
                    </div>


                    <div className="single-post-content">
                        <PortableText
                            value={postData.body}
                            components={myComponents}
                        />
                    </div>

                </article>
                : 
                <article className="no-post-wrapper">
                    <p>No post data available.</p>
                </article>
            }
            <div className="back-btn-container">
                <NavLink to="/blog"><button>Back to posts</button></NavLink>
            </div>
        </main>
    )
}