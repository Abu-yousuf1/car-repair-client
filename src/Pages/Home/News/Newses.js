import React, { useState } from 'react';
import { Card, Col, ListGroup } from 'react-bootstrap';
import './news.css'
import Fade from 'react-reveal/Fade';
import { useEffect } from 'react';

// const services = [
//     {
//         id: 1,
//         title: 'Preventative Maintenance',
//         description: 'The best way to minimize breakdowns is doing routine maintenance',
//         image: 'https://s3.amazonaws.com/liveotobots/auto-repair/wp-content/uploads/2018/06/20113438/regular-car-service.jpg',
//         price: 50
//     },
//     {
//         id: 2,
//         title: 'Brake Repair & Services',
//         description: 'Brakes wear out over time requiring service',
//         image: 'data:image/jpeg;base64,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',
//         price: 89
//     },
//     {
//         id: 3,
//         title: 'Transmission Service & Repair',
//         description: 'Brakes wear out over time requiring service',
//         image: 'data:image/jpeg;base64,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',
//         price: 89
//     },
//     {
//         id: 4,
//         title: 'Brake Repair & Services',
//         description: 'Brakes wear out over time requiring service',
//         image: 'https://smartdata.tonytemplates.com/car-repair-service-v4/car1/wp-content/uploads/sites/5/2017/03/services-item-img01.jpg',
//         price: 89
//     }
//     ,
//     {
//         id: 5,
//         title: 'Brake Repair & Services',
//         description: 'Brakes wear out over time requiring service',
//         image: 'https://smartdata.tonytemplates.com/car-repair-service-v4/car1/wp-content/uploads/sites/5/2017/03/services-item-img01.jpg',
//         price: 89
//     }
//     ,
//     {
//         id: 6,
//         title: 'Brake Repair & Services',
//         description: 'Brakes wear out over time requiring service',
//         image: 'https://smartdata.tonytemplates.com/car-repair-service-v4/car1/wp-content/uploads/sites/5/2017/03/services-item-img01.jpg',
//         price: 89
//     }
//     ,
//     {
//         id: 6,
//         title: 'Brake Repair & Services',
//         description: 'Brakes wear out over time requiring service',
//         image: 'https://smartdata.tonytemplates.com/car-repair-service-v4/car1/wp-content/uploads/sites/5/2017/03/services-item-img01.jpg',
//         price: 89
//     }
// ]

// console.log(services[0]);
const Newses = () => {

    const [newses, setNewses] = useState([])
    const [news, setNews] = useState()


    console.log('newses', newses);
    useEffect(() => {
        fetch('https://obscure-waters-41987.herokuapp.com/newses')
            .then(res => res.json())
            .then(data => setNewses([...data].reverse()))
    }, [])

    const handleDetails = (news) => {
        setNews(news)
    }
    return (
        <div className="news-bg ">
            <h3 className="text-center primary-color fw-bold  my-5 py-5 "> Our News</h3>
            <div className="row contianer-fluid m-3 py-5 mx-auto">
                <Fade left>
                    <div className="col-lg-6" >
                        {
                            newses.slice(0, 7).map(news =>
                                <ListGroup className=" textHover" defaultActiveKey="#link1" key={news._id}>
                                    <ListGroup.Item className="bg-transparent m-1 text-light  border-light d-flex justify-content-between " action onClick={() => handleDetails(news)}>
                                        <span> {news?.title}</span>  <span> {news?.time}</span>
                                    </ListGroup.Item>
                                </ListGroup>,
                            )
                        }
                    </div>
                </Fade>
                <Fade right>
                    <div className="col-lg-6" >
                        <Col>

                            {
                                <Card className="bg-transparent text-light border-light mt-lg-0 mt-3 " style={{ width: '100%' }}>
                                    <Card.Img style={{ height: '260px', width: '100%' }} variant="top" src={news ? news?.image : newses?.[0]?.image} />
                                    <Card.Body>
                                        <div>
                                            <Card.Title >{news ? news.title : newses?.[0]?.title}</Card.Title>

                                        </div>
                                        <Card.Text>
                                            {news ? news?.description.slice(0, 60) : newses?.[0]?.description?.slice(0, 60)}...
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                //  <div className="spinner-border text-success" role="status">
                                //     <span className="visually-hidden">Loading...</span>
                                // </div>

                            }

                        </Col>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Newses;