import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faHtml5, faCss3Alt, faJs, faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons';
import { Modal } from 'react-bootstrap';


const HomeComponents = () => {

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    return (
        <div>
            <Element name="home">
                <div className='home-div'>
                    <div className='left'>
                        <h1 >Hii,</h1>
                        <h1>I'am <span>Yash</span></h1>
                        <h1>Front End Developer</h1>
                        <div className='icons'>
                            <a href="https://www.linkedin.com/in/yash-chaturvedi-2273b2233" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} style={{ marginRight: '1rem', fontSize: '2rem', color: 'skyblue' }} />
                            </a>
                            <a href="https://www.github.com/yraj78" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} style={{ fontSize: '2rem', color: 'skyblue' }} />
                            </a>
                        </div>

                        <button className="custom-button" onClick={handleShow}>Contact</button>

                        {/* Modal */}
                        <Modal show={showModal} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Contact Form</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form className='contact-form' action="https://api.web3forms.com/submit" method="POST">

                                    <input type="hidden" name="access_key" value="2ef8dfb0-8b72-42f0-b950-1266559b0c91" />

                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" name="name" placeholder='Peter Parker' required />

                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" name="email" placeholder='xyz@someone.com' required />

                                    <label htmlFor="phone">Phone:</label>
                                    <input type='tel' id="phone" name="phone" pattern="[0-9]{10}" placeholder='123-45-678-90' />

                                    <label htmlFor="message">Message:</label>
                                    <input type='text' id="message" name="message" placeholder='Any message?' />

                                    <button className='custom-button' type="submit">Submit</button>
                                </form>
                            </Modal.Body>
                        </Modal>
                    </div>

                    <div className='right' >
                        <img className='custom-image' src="/profile.jpeg" alt="Your profile" />
                    </div>
                </div>
            </Element>
            <Element name="about">
                <div className='about-head'><h1>About </h1>
                </div>
                <div className='about-box'>
                    <div >
                        <img className='about-image' src='/image2.jpeg' alt='about pic' />
                    </div>

                    <div className='right-about'>
                        <h4>A budding <span>Front end web developer</span> passionate
                            about creating sleek and user-friendly websites. With a knack for
                            problem-solving and an eye for design, I'm eager to dive into front-end
                            development and make an impact. Let's build something great together!
                        </h4>
                    </div>
                </div>
            </Element>

            <Element name="skills">
                <div className="skill-heading">
                    <h2>Skills</h2>
                </div>
                <div className="skill-container">
                    <div className="skill-container">
                        <div className="skill-item">
                            <p><b>HTML</b></p>
                            <FontAwesomeIcon icon={faHtml5} className="icon-html" />
                            <div className="skill-bar">
                                <div className="skill-bar-inner"></div>
                                <div className="skill-bar-fill skill-bar-fill-html"></div>
                            </div>
                        </div>

                        <div className="skill-item">
                            <p><b>CSS</b></p>
                            <FontAwesomeIcon icon={faCss3Alt} className="icon-css" />
                            <div className="skill-bar">
                                <div className="skill-bar-inner"></div>
                                <div className="skill-bar-fill skill-bar-fill-css"></div>
                            </div>
                        </div>

                        <div className="skill-item">
                            <p><b>JavaScript</b></p>
                            <FontAwesomeIcon icon={faJs} className="icon-js" />
                            <div className="skill-bar">
                                <div className="skill-bar-inner"></div>
                                <div className="skill-bar-fill skill-bar-fill-js"></div>
                            </div>
                        </div>

                        <div className="skill-item">
                            <p><b>Bootstrap</b></p>
                            <FontAwesomeIcon icon={faBootstrap} className="icon-bootstrap" />
                            <div className="skill-bar">
                                <div className="skill-bar-inner"></div>
                                <div className="skill-bar-fill skill-bar-fill-bootstrap"></div>
                            </div>
                        </div>

                        <div className="skill-item">
                            <p><b>React.js</b></p>
                            <FontAwesomeIcon icon={faReact} className="icon-react" />
                            <div className="skill-bar">
                                <div className="skill-bar-inner"></div>
                                <div className="skill-bar-fill skill-bar-fill-react"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>

            <Element name="works">
                <h1 style={{ color: 'gray', margin: '6rem 6rem', textAlign: 'center' }}>My Works</h1>
                <div className='Container'>
                    <div className='box'>
                        <div className='imgbx'>
                            <img src='restro.jpg' alt='project' />
                        </div>
                        <div className='content'>
                            <div>
                                <a href="https://restro-web-app.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <h2>Restro App</h2>
                                </a>
                                <p>
                                    A dynamic React web application designed to showcase a restaurant's menu
                                    offerings across three meal categories: breakfast, lunch, and dinner.
                                    With a clean and intuitive user interface, DelishDine provides customers
                                    with a seamless browsing experience to explore and order their favorite
                                    dishes from the comfort of their own devices.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='imgbx'>
                            <img src='show.jpg' alt='project' />
                        </div>
                        <div className='content'>
                            <div>
                                <a href="https://tv-show-application.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <h2>Show App</h2>
                                </a>
                                <p>
                                    An engaging React web application designed to provide users
                                    with a comprehensive platform for discovering and booking their favorite
                                    TV shows. Seamlessly integrating show listings with booking functionality,
                                    ShowBooker offers users an immersive experience to explore show details,
                                    reserve tickets, and plan their entertainment schedule with ease.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    );
}

export default HomeComponents;