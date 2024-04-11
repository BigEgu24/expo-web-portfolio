import React, {useState,useEffect} from 'react';
import "./Contact.scss";
import Icon from '@mdi/react';
import { 
    mdiChevronLeft
} from '@mdi/js';
import Button from '../../components/Button/Button';
const Link = require("react-router-dom").Link;

export default function Contact() {
    const [input, setInput] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Update window width on resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    // Dynamically adjust styles based on window width
    const responsiveStyles = {
        formContainer: {
            padding: 20, // Adjust padding
            fontSize: 16, // Adjust font size
        },
        formInput: {
            margin: 10, // Adjust input margin
        },
        buttonContainer: {
            justifyContent: windowWidth > 768 ? 'flex-end' : 'center', // Adjust button alignment
        },
    };

    const inputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }



    const postData = async (url = '', data = {}) => {
        // Default options are marked with *
        const response = await fetch(url, {
            method: "POST",
            cache: "no-cache",
            credentials: "omit",
            redirect: 'follow',
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }
    function capitalize(str) {
        return str.replace(/\w\S*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    const formSubmit = async (e) => {
        e.preventDefault();
        const id = "AKfycbyrGLJAMSNMDZFFVLcH5QOetvfS0MKHDp2veGW8IdW7GS1ACkVXKL-LTMBNlURmF4GCIQ";
        const URL = `https://script.google.com/macros/s/${id}/exec`;
        const message = `
            <h3>
                Message from ${capitalize(input.name)} using the Portfolio Contact Form
            </h3>
            <p>
                ${input.message}
            </p>
            <br />
            <br />
            <p>
                Contact Us At ${input.email}
            </p>
        `
        let payload = {
            Subject: `Portfolio Contact Form Message From ${capitalize(input.name)}`,
            Message: message
        }

        postData(URL, payload)
        .then(data => {
            console.log(data); // JSON data parsed by `data.json()` call
            if(data.success===true){
                console.log("Success!!")
            }
        })
        .catch(() => (error) => { 
            console.log(error)
        })
    }

    return (
        <div className="contact-page" style={{ backgroundImage: `url('/images/nature.png')` }}>
            <Link to={"/"} className="back-btn absolute flex">
                <Icon path={mdiChevronLeft} size={1} color="white"/>
                <p className="relative">Back</p>
            </Link>
            <div className="contact-form absolute flex column">
                <form className="container margin-auto" onSubmit={(e) => formSubmit(e)} method="POST" style={responsiveStyles.formContainer}>
                    <h1 className="title">Contact</h1>
                    <div className="input flex column" style={responsiveStyles.formInput}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onChange={(e) => inputChange(e)} value={input.name}/>
                    </div>
                    <div className="input flex column" style={responsiveStyles.formInput}>
                        <label htmlFor="email">Email Address</label>
                        <input type="text" name="email" onChange={(e) => inputChange(e)} value={input.email}/>
                    </div>
                    <div className="input flex column" style={responsiveStyles.formInput}>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" cols="30" rows="10" onChange={(e) => inputChange(e)} value={input.message}></textarea>
                    </div>
                    <div className="flex" style={{...responsiveStyles.buttonContainer, float: 'right' }}>
                        <Button type="blue">SEND</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}