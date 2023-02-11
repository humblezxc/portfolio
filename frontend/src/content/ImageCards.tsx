import React from "react";
import ImageCard from "../common/view/ImageCard";

const data = [
    {
        imageSource: "/home/humblezxc/WebstormProjects/portfolio/frontend/src/img/sunset-7757752_960_720.webp",
        imageAlt: "Image 1",
        title: "Card 1",
        description: "This is card 1",
        overlayText: "Overlay text 1"
    },
    {
        imageSource: "image2.jpg",
        imageAlt: "Image 2",
        title: "Card 2",
        description: "This is card 2",
        overlayText: "Overlay text 2"
    },
    {
        imageSource: "image3.jpg",
        imageAlt: "Image 3",
        title: "Card 3",
        description: "This is card 3",
        overlayText: "Overlay text 3"
    },
    {
        imageSource: "image4.jpg",
        imageAlt: "Image 4",
        title: "Card 4",
        description: "This is card 4",
        overlayText: "Overlay text 4"
    },
    {
        imageSource: "image5.jpg",
        imageAlt: "Image 5",
        title: "Card 5",
        description: "This is card 5",
        overlayText: "Overlay text 5"
    },
    {
        imageSource: "image6.jpg",
        imageAlt: "Image 6",
        title: "Card 6",
        description: "This is card 6",
        overlayText: "Overlay text 6"
    },
];

const ImageCards: React.FC = () => {
    return (
        <div className="d-flex flex-wrap">
            {data.map((item, index) => (
                <div className="p-3" key={index}>
                    <ImageCard
                        imageSource={item.imageSource}
                        imageAlt={item.imageAlt}
                        title={item.title}
                        overlayText={item.overlayText}
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageCards;
