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
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
                    <div className='left' style={{ margin: '10rem 0 0 7rem ' }}>
                        <h1 style={{ fontSize: '5rem' }}>Hii,</h1>
                        <h1>I'am <span style={{ color: 'skyblue' }}>Yash</span></h1>
                        <h1>Front End Developer</h1>
                        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'left' }}>
                            <a href="https://www.linkedin.com/in/yash-chaturvedi-2273b2233" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} style={{ marginRight: '1rem', fontSize: '2rem', color: 'skyblue' }} />
                            </a>
                            <a href="https://www.github.com/yraj78" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} style={{ fontSize: '2rem', color: 'skyblue' }} />
                            </a>
                        </div>

                        <button style={{ backgroundColor: 'skyblue', border: 'none', width: '25rem', marginTop: '4rem' }} type="button" className="btn btn-primary" onClick={handleShow}>Contact</button>

                        {/* Modal */}
                        <Modal show={showModal} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Contact Form</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form style={{ display: 'flex', flexDirection: 'column' }} action="https://api.web3forms.com/submit" method="POST">
                                    <input type="hidden" name="access_key" value="2ef8dfb0-8b72-42f0-b950-1266559b0c91"/>
                                        <label htmlFor="name">Name:</label>
                                        <input type="text" id="name" name="name" placeholder='Peter Parker' required />
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="email" name="email" placeholder='xyz@someone.com' required />
                                        <label htmlFor="phone">Phone:</label>
                                        <input type='tel' id="phone" name="phone" pattern="[0-9]{10}" placeholder='123-45-678-90' />
                                        <label htmlFor="message">Message:</label>
                                        <input type='text' id="message" name="message" placeholder='Any message?' style={{ height: '50px', width: '465px' }} />

                                        <button style={{ marginTop: '10px' }} type="submit">Submit</button>
                                </form>
                            </Modal.Body>
                        </Modal>
                    </div>

                    <div className='right' style={{ margin: '2rem 10rem 0 0' }}>
                        <img src="/profile.jpeg" alt="Your profile" style={{ width: '28rem', height: '28rem', borderRadius: '50%' }} />
                    </div>
                </div>
            </Element>
            <Element name="about">
                <div style={{ margin: '4rem 1rem', textAlign: 'center' }}><h1 style={{ color: 'gray' }}>About </h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className='left-about'>
                        <img src='/image2.jpeg' alt='about pic' style={{ width: '24rem', height: '30rem', borderRadius: '10%', marginLeft: '5rem' }} />
                    </div>

                    <div className='right-about'>
                        <h4 style={{ margin: '0 11rem 0 3rem', lineHeight: '3.5' }}>A budding <span style={{ color: 'skyblue' }}>Front end web developer</span> passionate
                            about creating sleek and user-friendly websites. With a knack for
                            problem-solving and an eye for design, I'm eager to dive into front-end
                            development and make an impact. Let's build something great together!
                        </h4>
                    </div>
                </div>
            </Element>

            <Element name="skills">
                <div style={{ marginTop: '5rem', textAlign: 'center' }}>
                    <h2 style={{ color: 'gray', marginBottom: '6rem' }}>Skills</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <p><b>HTML</b></p>
                            <FontAwesomeIcon icon={faHtml5} style={{ fontSize: '3rem', marginBottom: '1rem', marginLeft: '0.5rem', color: 'orangered' }} />
                            <div style={{ flex: 1, marginLeft: '4.5rem', height: '20px', position: 'relative', width: '45rem' }}>
                                <div style={{ width: '100%', backgroundColor: 'lightgray', height: '100%', borderRadius: '5px', position: 'absolute', top: 0, left: 0 }}></div>
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '80%', backgroundColor: 'orangered', height: '100%', borderRadius: '5px' }}></div>
                                <p style={{ marginLeft: '0.5rem', color: 'orangered', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>80%</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <p><b>CSS</b></p>
                            <FontAwesomeIcon icon={faCss3Alt} style={{ fontSize: '3rem', marginBottom: '1rem', marginLeft: '0.5rem', color: 'blue' }} />
                            <div style={{ flex: 1, marginLeft: '5.5rem', height: '20px', position: 'relative', width: '45rem' }}>
                                <div style={{ width: '100%', backgroundColor: 'lightgray', height: '100%', borderRadius: '5px', position: 'absolute', top: 0, left: 0 }}></div>
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '65%', backgroundColor: 'blue', height: '100%', borderRadius: '5px' }}></div>
                                <p style={{ marginLeft: '0.5rem', color: 'orangered', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}></p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <p><b>JavaScript</b></p>
                            <FontAwesomeIcon icon={faJs} style={{ fontSize: '3rem', marginBottom: '1rem', marginLeft: '0.5rem', color: 'yellow' }} />
                            <div style={{ flex: 1, marginLeft: '2rem', height: '20px', position: 'relative', width: '45rem' }}>
                                <div style={{ width: '100%', backgroundColor: 'lightgray', height: '100%', borderRadius: '5px', position: 'absolute', top: 0, left: 0 }}></div>
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '60%', backgroundColor: 'yellow', height: '100%', borderRadius: '5px' }}></div>
                                <p style={{ marginLeft: '0.5rem', color: 'orangered', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}></p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <p><b>Bootstrap</b></p>
                            <FontAwesomeIcon icon={faBootstrap} style={{ fontSize: '3rem', marginBottom: '1rem', marginLeft: '0.5rem', color: 'powderblue' }} />
                            <div style={{ flex: 1, marginLeft: '1.5rem', height: '20px', position: 'relative', width: '45rem' }}>
                                <div style={{ width: '100%', backgroundColor: 'lightgray', height: '100%', borderRadius: '5px', position: 'absolute', top: 0, left: 0 }}></div>
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '70%', backgroundColor: 'powderblue', height: '100%', borderRadius: '5px' }}></div>
                                <p style={{ marginLeft: '0.5rem', color: 'orangered', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}></p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <p><b>React.js</b></p>
                            <FontAwesomeIcon icon={faReact} style={{ fontSize: '3rem', marginBottom: '1rem', marginLeft: '0.5rem', color: 'skyblue' }} />
                            <div style={{ flex: 1, marginLeft: '3rem', height: '20px', position: 'relative', width: '45rem' }}>
                                <div style={{ width: '100%', backgroundColor: 'lightgray', height: '100%', borderRadius: '5px', position: 'absolute', top: 0, left: 0 }}></div>
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '80%', backgroundColor: 'skyblue', height: '100%', borderRadius: '5px' }}></div>
                                <p style={{ marginLeft: '0.5rem', color: 'orangered', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>

            <Element className='workelement' name="works">
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