import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// Styled components
const ContactContainer = styled.div`
  background-color: #f4f4f4;
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
  width: 100%;
`;

const Name = styled.h2`
  color: black;
//   margin-bottom: 10px;
`;
const Detail = styled.p`
  color: 'black';
`;
// Contact component
const Contact = ({ name, email, phone }) => {
    return (
        <ContactContainer style={{
            backgroundColor: 'white',
            marginTop: 25
        }}>
            <div style={{
                color: 'black',
                fontSize: 19,
                fontFamily: 'cursive'
            }}>
                Contact To Developer 🙂
            </div>
            <Name style={{
                color: 'black',
                fontSize: 50,
                fontFamily: 'fantasy'
            }}>Sayyed Sajdeen</Name>
            <Detail style={{
                color: 'black',
                fontSize: 15,
                fontFamily:'monospace'   
            }} >Email : </Detail>
            <Link style={{
                fontSize: 15,
                fontFamily: 'serif'
            }} >sajdeen111@gmail.com</Link>
            <Detail style={{
                color: 'black',
                fontSize: 15,
                fontFamily:'monospace'   
            }} >LinkedIn : </Detail>
            <Link style={{
                fontSize: 15,
                fontFamily: 'serif'
            }}>https://www.linkedin.com/in/sayyed-sajdeen/</Link>
            <Detail style={{
                color: 'black',
                fontSize: 15,
                fontFamily:'monospace'   
            }} >GitHub : </Detail>
            <Link style={{
                fontSize: 15,
                fontFamily: 'serif'
            }}>https://github.com/SayyedSajdeen</Link>
        </ContactContainer>
    );
}
export default Contact;