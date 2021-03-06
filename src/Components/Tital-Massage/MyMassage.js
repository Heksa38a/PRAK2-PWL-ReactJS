import React from 'react';
import Typewriter from 'typewriter-effect';
import styled from "styled-components";

const MyMassage  = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const  MytitleMassage = ()=>( 
    <MyMassage>
        <div className="titleMessage">
        <div className="heading">
            <div className="main text-center mb-3">
            Hallo, saya 
            <br />
            <span>
                <strong>Heksa Dananjaya (119140057)</strong>
            </span>
            </div>
            <div className="sub">
                

            
                <Typewriter
                options={{
                  strings: ['Heksa Dananjaya.'],

                    strings: ['Seorang Mahahsiswa.'],
                    autoStart: true,
                    loop: true,
                    dely:25
                    
                }}
                />
                <br/>
                <div>
                <button className="btn btn-danger">Dowenload_Resume</button>
                </div>
            </div>
        </div>
    </div>

    </MyMassage>
);


export default MytitleMassage;