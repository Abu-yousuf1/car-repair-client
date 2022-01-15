import React, { useState, useEffect } from 'react';
import SwiperCore, {
    Pagination,
    Navigation,
    Scrollbar,
    A11y
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/modules/scrollbar/scrollbar.scss';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Rating from 'react-rating';
import Review from '../../Dashboard/Review/Review';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



const services = [
    {
        name: 'Preventative Maintenance',
        description: 'The best way to minimize breakdowns is doing routine maintenance',
        image: 'https://smartdata.tonytemplates.com/car-repair-service-v4/car1/wp-content/uploads/sites/5/2017/03/services-item-img01.jpg',
        price: 50
    },
    {
        name: 'Brake Repair & Services',
        description: 'Brakes wear out over time requiring service',
        image: 'https://smartdata.tonytemplates.com/car-repair-service-v4/car1/wp-content/uploads/sites/5/2017/03/services-item-img01.jpg',
        price: 89
    },
    {
        name: 'Brake Repair & Services',
        description: 'Brakes wear out over time requiring service',
        image: 'https://smartdata.tonytemplates.com/car-repair-service-v4/car1/wp-content/uploads/sites/5/2017/03/services-item-img01.jpg',
        price: 89
    },
    {
        name: 'Brake Repair & Services',
        description: 'Brakes wear out over time requiring service',
        image: 'https://smartdata.tonytemplates.com/car-repair-service-v4/car1/wp-content/uploads/sites/5/2017/03/services-item-img01.jpg',
        price: 89
    }
    ,
    {
        name: 'Brake Repair & Services',
        description: 'Brakes wear out over time requiring service',
        image: 'https://smartdata.tonytemplates.com/car-repair-service-v4/car1/wp-content/uploads/sites/5/2017/03/services-item-img01.jpg',
        price: 89
    }
    ,
    {
        name: 'Brake Repair & Services',
        description: 'Brakes wear out over time requiring service',
        image: 'https://smartdata.tonytemplates.com/car-repair-service-v4/car1/wp-content/uploads/sites/5/2017/03/services-item-img01.jpg',
        price: 89
    }
    ,
    {
        name: 'Brake Repair & Services',
        description: 'Brakes wear out over time requiring service',
        image: 'https://smartdata.tonytemplates.com/car-repair-service-v4/car1/wp-content/uploads/sites/5/2017/03/services-item-img01.jpg',
        price: 89
    }
    ,
    {
        name: 'Brake Repair & Services',
        description: 'Brakes wear out over time requiring service',
        image: 'https://smartdata.tonytemplates.com/car-repair-service-v4/car1/wp-content/uploads/sites/5/2017/03/services-item-img01.jpg',
        price: 89
    }
    ,
    {
        name: 'Brake Repair & Services',
        description: 'Brakes wear out over time requiring service',
        image: 'https://smartdata.tonytemplates.com/car-repair-service-v4/car1/wp-content/uploads/sites/5/2017/03/services-item-img01.jpg',
        price: 89
    }
    ,
    {
        name: 'Brake Repair & Services',
        description: 'Brakes wear out over time requiring service',
        image: 'https://smartdata.tonytemplates.com/car-repair-service-v4/car1/wp-content/uploads/sites/5/2017/03/services-item-img01.jpg',
        price: 89
    }
    ,
    {
        name: 'Brake Repair & Services',
        description: 'Brakes wear out over time requiring service',
        image: 'https://smartdata.tonytemplates.com/car-repair-service-v4/car1/wp-content/uploads/sites/5/2017/03/services-item-img01.jpg',
        price: 89
    }
    ,
    {
        name: 'Brake Repair & Services',
        description: 'Brakes wear out over time requiring service',
        image: 'https://smartdata.tonytemplates.com/car-repair-service-v4/car1/wp-content/uploads/sites/5/2017/03/services-item-img01.jpg',
        price: 89
    }
    ,
    {
        name: 'Brake Repair & Services',
        description: 'Brakes wear out over time requiring service',
        image: 'https://smartdata.tonytemplates.com/car-repair-service-v4/car1/wp-content/uploads/sites/5/2017/03/services-item-img01.jpg',
        price: 89
    }
]
const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://obscure-waters-41987.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container className="my-5">
            <h2 className="text-center primary-color mb-5">Testimonials</h2>

            <Swiper

                spaceBetween={20}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                scrollbar={{ draggable: true }}
                pagination={{
                    "clickable": true
                }} breakpoints={{
                    "640": {
                        "slidesPerView": 1,
                        "spaceBetween": 30
                    },
                    "768": {
                        "slidesPerView": 2,
                        "spaceBetween": 30
                    },
                    "1024": {
                        "slidesPerView": 3,
                        "spaceBetween": 60
                    }
                }} className="mySwiper">
                <div>


                    {reviews.map((reviews, idx) => (

                        <SwiperSlide key={idx}>
                            <Fade bottom>
                                <Col >
                                    <Card className="border-0">
                                        <div className="d-flex justify-content-center">
                                            {/* <Card.Img variant="top" style={{
                                                borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover'
                                            }} src={reviews.user?.image ? `data:image/jpeg;base64,${reviews.user?.image} ` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZfk_mBRRAnMVpDjIrMbiU5DUxjWeZ5nqRQ&usqp=CAU"} /> */}
                                            {reviews.user?.image ? <Card.Img variant="top" style={{
                                                borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover'
                                            }} src={reviews.user?.image ? `data:image/jpeg;base64,${reviews.user?.image}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZfk_mBRRAnMVpDjIrMbiU5DUxjWeZ5nqRQ&usqp=CAU"} />
                                                : <div style={{
                                                    borderRadius: '50%', width: '100px', height: '100px', backgroundColor: '#7A7978', display: 'flex', justifyContent: 'center'
                                                }} > <h3 style={{ position: 'absolute', top: '30px' }}>{reviews.user?.name?.split(' ').map(word => word[0]).join('')}</h3></div>}
                                        </div>
                                        <Card.Body>
                                            <Card.Title className="fs-5">{reviews.user?.name}</Card.Title>
                                            <Rating
                                                className="fs-6 text-warning my-2"
                                                initialRating={reviews.rating}
                                                readonly
                                                emptySymbol="fa fa-star-o fa-2x"
                                                fullSymbol="fa fa-star fa-2x"
                                            />
                                            <Card.Text className="fs-6 text-muted">
                                                {reviews.text.slice(0, 300)}
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Fade>
                        </SwiperSlide>

                    ))}


                </div>
            </Swiper>



        </Container >
    );
};

export default Testimonials;