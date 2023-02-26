import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface SendEmailButtonProps {
    buttonText: string;
    email: string;
}

const SendEmail: React.FC<SendEmailButtonProps> = ({ buttonText, email }) => {
    const handleClick = () => {
        const mailtoLink = `mailto:${email}?subject=Email%20from%20my%20website%20via%20Gmail`;
        window.location.href = mailtoLink;
    };

    return (
        <Button variant="primary" onClick={handleClick}>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            {buttonText}
        </Button>
    );
};

export default SendEmail;
