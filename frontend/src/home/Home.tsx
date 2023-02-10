import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';

export default function Home () {
    return(
        <div>
            <div className='p-5 text-center bg-light'>
                <h1 className='mb-3'>Portfolio</h1>
                <h4 className='mb-3'>Subheading</h4>
                <a className='btn btn-primary' href='' role='button'>
                    Call to action
                </a>
                <div className="container">
                    <Button variant="primary">Click me</Button>
                </div>

            </div>
            <Carousel>
                <Carousel.Item>
                    <div className= "p-5 text-center bg-dark">
                        <h1 className='mb-3'>Portfolio</h1>
                    </div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className= "p-5 text-center bg-dark">
                        <h1 className='mb-3'>Portfolio</h1>
                    </div>

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className= "p-5 text-center bg-dark">
                        <h1 className='mb-3'>Portfolio</h1>
                    </div>

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
