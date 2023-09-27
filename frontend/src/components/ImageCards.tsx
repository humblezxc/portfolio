import React, {useEffect, useState} from "react";
import ImageCard from "./ImageCard";
import axios from 'axios';
import {Link} from "react-router-dom";

interface Project {
    id: number;
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
        {id: 1, image: 'https://picsum.photos/id/1082/400/230'},//96
        {id: 2, image: 'https://picsum.photos/id/252/400/230'},
        {id: 3, image: 'https://picsum.photos/id/486/400/230'},//885
        {id: 4, image: 'https://picsum.photos/id/893/400/230'},//811

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
