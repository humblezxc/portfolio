import React, {useEffect, useState} from "react";
import ImageCard from "./ImageCard";
import axios from 'axios';
import {Link} from "react-router-dom";
import {projects} from "../data/projects";

const ImageCards: React.FC = () => {
    const [image, setImage] = useState<string>('');

    useEffect(() => {
        axios.get(image)
            .then(response => {
                setImage(response.config.url ?? '');
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center">
            {projects.map((item, index) => (
                <div className="m-3" key={index}>
                    <Link key={item.id} to={`/project/${item.id}`}>
                        <ImageCard
                            imageSrc={item.projectImageSrc}
                            imageAlt={item.projectImageAlt}
                            title={item.title}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
};
export default ImageCards;
