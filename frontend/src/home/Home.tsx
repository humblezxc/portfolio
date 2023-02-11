import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import ImageCards from "../content/ImageCards";

export default function Home () {
    return(
        <div className="h-80 w-100 d-flex flex-wrap justify-content-center align-items-center">
            <div className="justify-content-center align-items-center d-flex flex-column">
                <h1 className='bg-light'>Portfolio</h1>
                <h4 className='text-center bg-light'>Subheading</h4>
                <a className='btn btn-primary' href='' role='button'>
                    Call to action
                </a>
                <Button variant="primary">Click me</Button>
            </div>
            <div className='d-flex flex-wrap justify-content-center'>

            {/*<Carousel>*/}
            {/*    <Carousel.Item>*/}
            {/*        <div className= "p-5 text-center bg-dark">*/}
            {/*            <h1 className='mb-3'>Portfolio</h1>*/}
            {/*        </div>*/}
            {/*        <Carousel.Caption>*/}
            {/*            <h3>First slide label</h3>*/}
            {/*            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
            {/*        </Carousel.Caption>*/}
            {/*    </Carousel.Item>*/}
            {/*    <Carousel.Item>*/}
            {/*        <div className= "p-5 text-center bg-dark">*/}
            {/*            <h1 className='mb-3'>Portfolio</h1>*/}
            {/*        </div>*/}

            {/*        <Carousel.Caption>*/}
            {/*            <h3>Second slide label</h3>*/}
            {/*            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
            {/*        </Carousel.Caption>*/}
            {/*    </Carousel.Item>*/}
            {/*    <Carousel.Item>*/}
            {/*        <div className= "p-5 text-center bg-dark">*/}
            {/*            <h1 className='mb-3'>Portfolio</h1>*/}
            {/*        </div>*/}

            {/*        <Carousel.Caption>*/}
            {/*            <h3>Third slide label</h3>*/}
            {/*            <p>*/}
            {/*                Praesent commodo cursus magna, vel scelerisque nisl consectetur.*/}
            {/*            </p>*/}
            {/*        </Carousel.Caption>*/}
            {/*    </Carousel.Item>*/}
            {/*</Carousel>*/}
            <ImageCards />
            </div>
        </div>
    );
}
