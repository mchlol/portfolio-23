import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../../client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import {getImageDimensions} from '@sanity/asset-utils';

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
            console.log(postData)
        })
        .catch(console.error);
    },[slug]);

    if (!postData) return <div>Loading...</div>;

    return (
        <main>
            {
                postData
                ? 
                <article className="single-post-wrapper">

                    <div className="post-header">              
                        <img className="post-header-img" src={urlFor(postData.mainImage).url()} alt={postData.title} />

                        <h2>{postData.title}</h2>

                        <div className="post-details">
                            <img src={urlFor(postData.authorImage).width(100).url()} alt={postData.name} /> 
                            <small>{postData.name}</small>
                        </div>
                    </div>


                    <div className="post-content">
                        <PortableText
                            value={postData.body}
                            components={myComponents}
                        />
                    </div>

                </article>
                : 
                <p>No author image available.</p>
            }
        </main>
    )
}