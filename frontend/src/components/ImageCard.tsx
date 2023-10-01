import React from "react";
import {Card, Image} from "react-bootstrap";

interface ImageCardProps {
    imageSrc: string;
    imageAlt: string
    title: string
}

const ImageCard = ({imageSrc, imageAlt, title}: ImageCardProps) => {
    return (
        <Card>
            <Image src={imageSrc} alt={imageAlt} fluid/>
            <div className="m-lg-2 font-monospace text-black">{title}</div>
        </Card>
    );
}
export default ImageCard;
