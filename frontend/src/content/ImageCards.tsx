import React, {useEffect, useState} from "react";
import ImageCard from "../common/view/ImageCard";
import axios from 'axios';
import {Link} from "react-router-dom";

interface Project {
    id: number;
    name: string;
    image: string;

}

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

    const projects: Project[] = [
        {id: 1, name: 'Project 1', image: 'https://picsum.photos/400/230'},
        {id: 2, name: 'Project 2', image: 'https://picsum.photos/400/230'},
        {id: 3, name: 'Project 3', image: 'https://picsum.photos/400/230'},
        {id: 4, name: 'Project 4', image: 'https://picsum.photos/400/230'},
        {id: 5, name: 'Project 5', image: 'https://picsum.photos/400/230'},
        {id: 6, name: 'Project 6', image: 'https://picsum.photos/400/230'},

    ];

    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center">
            {projects.map((item, index) => (
                <div className="m-3" key={index}>
                    <Link key={item.id} to={`/project/${item.id}`}>
                        <ImageCard
                            imageSource={item.image}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ImageCards;
