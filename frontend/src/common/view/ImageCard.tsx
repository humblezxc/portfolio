import React from "react";
import { Card, Image, OverlayTrigger, Tooltip } from "react-bootstrap";
interface Props {
    imageSource: string;
    imageAlt: string;
    title: string;
    overlayText: string;
}

const ImageCard: React.FC<Props> = ({ imageSource, imageAlt, title, overlayText }) => {
    return (
        <Card>
            <OverlayTrigger
                placement="top"
                overlay={
                    <Tooltip>
                        {overlayText}
                    </Tooltip>
                }
            >
                <Image src={imageSource} alt={imageAlt} fluid />
            </OverlayTrigger>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
        </Card>
    );
}
export default ImageCard;
