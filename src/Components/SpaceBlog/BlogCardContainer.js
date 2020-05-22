import React, { useContext } from 'react';
import { Context } from "../../Context/userContext";
import { Row, Col } from "react-bootstrap";
import "../style/spaceblog.css";

const BlogCardContainer = () => {
    const { blogInfo } = useContext(Context)

    return (
        <div className="blog-card-container">
            <Row>
                {blogInfo.map((el, index) => (
                    <Col md={4} sm={6} className="card-col" key={index}>
                        <div className="blog-card">
                            <div style={{
                                backgroundImage: "url(" + require(`../../Photos/space-blog-kartici/${index}.jpg`) + ")",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                height: "250px"
                            }}></div>
                            <div className="blog-card-info">
                                <h5>{el.title}</h5>
                                <p>{el.description}</p>
                                <span className="card-category">{el.category}</span>
                                <i className="far fa-arrow-alt-circle-right "></i>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default BlogCardContainer;