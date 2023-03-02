import React from "react";
import { Card, Image, OverlayTrigger, Tooltip } from "react-bootstrap";
interface Props {
    imageSource: string;
}

const ImageCard: React.FC<Props> = ({ imageSource }) => {
    return (
        <Card>
            <Image src={imageSource} fluid />
        </Card>
    );
}
export default ImageCard;
