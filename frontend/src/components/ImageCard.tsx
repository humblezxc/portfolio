import React from "react";
import {Card, Image} from "react-bootstrap";

interface Props {
    imageSource: string;
}

const ImageCard: React.FC<Props> = ({imageSource}) => {
    return (
        <Card>
            <Image src={imageSource} fluid/>
            <div className="m-lg-2 font-monospace">Check the project</div>
        </Card>
    );
}
export default ImageCard;
