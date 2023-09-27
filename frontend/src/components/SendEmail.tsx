import React from 'react';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

interface SendEmailButtonProps {
    buttonText: string;
    email: string;
}

const SendEmail: React.FC<SendEmailButtonProps> = ({ buttonText, email }) => {
    const handleClick = () => {
        window.location.href = `mailto:${email}?subject=Email%20from%20my%20website%20via%20Gmail`;
    };

    return (
        <Button style={{marginLeft: "1em"}} variant="outline-success" onClick={handleClick}>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            {buttonText}
        </Button>
    );
};

export default SendEmail;
