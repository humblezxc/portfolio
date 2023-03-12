import React, { useEffect, useState } from "react";
import ImageCard from "../common/view/ImageCard";
import axios from 'axios';

interface CardData {
    imageAlt: string;
    title: string;
    overlayText: string;
}

const ImageCards: React.FC = () => {
    const imageUrl = 'https://picsum.photos/400/230';
    const [image, setImage] = useState<string>('');

    useEffect(() => {
        axios.get(imageUrl)
            .then(response => {
                setImage(response.config.url ?? '');
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const data: CardData[] = [
        {
            imageAlt: "Image 1",
            title: "Card 1",
            overlayText: "Overlay text 1"
        },
        {
            imageAlt: "Image 2",
            title: "Card 2",
            overlayText: "Overlay text 2"
        },
        {
            imageAlt: "Image 3",
            title: "Card 3",
            overlayText: "Overlay text 3"
        },
        {
            imageAlt: "Image 4",
            title: "Card 4",
            overlayText: "Overlay text 4"
        },
        {
            imageAlt: "Image 5",
            title: "Card 5",
            overlayText: "Overlay text 5"
        },
        {
            imageAlt: "Image 6",
            title: "Card 6",
            overlayText: "Overlay text 6"
        },
    ];

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {data.map((item, index) => (
                <div className="m-3" key={index} style={{ width: "400px", height: "230px" }}>
                    <ImageCard
                        imageSource={image}
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageCards;
