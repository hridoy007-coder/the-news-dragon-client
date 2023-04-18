import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg1.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login with google</Button><br />
            <Button variant="outline-secondary"> <FaGithub /> Login with github</Button>
            <div className='mt-3 mb-3'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook className='text-primary' /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='text-primary' /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='text-danger' /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='mt-2'>
                <img src={bg} alt="" />
            </div>
        </div>

    );
};

export default RightNav;