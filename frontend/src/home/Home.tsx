import React from "react";
import { Button } from 'react-bootstrap';
import ImageCards from "../content/ImageCards";

export default function Home () {
    return(
        <div className="bg-dark">
            <div className="d-flex justify-content-center align-items-center flex-column bg-dark">
                <h1 className='text-light'>Portfolio</h1>
                <h4 className='text-light'>Subheading</h4>
                <a className='btn btn-primary' href='' role='button'>
                    Call to action
                </a>
                <Button variant="primary">Click me</Button>
            </div>
            <div className='d-flex flex-wrap justify-content-center'>
                <ImageCards />
            </div>
        </div>
    );
}
