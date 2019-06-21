import React from 'react';
import './Modal.css';
import Auxilliary from './Auxilliary';
import Backdrop from './Backdrop';


const modal = (props) => (
    <Auxilliary>
        <Backdrop show={props.show}
            clicked={props.modalClosed} />
        <div className="Modal"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }} >
                <h4>You could release as much as:</h4>
            <h3>£{props.children}</h3>
            <h4>from the value of your home</h4>
            <button>Click here to speak to our financial advisors today</button>
        </div>
    </Auxilliary>
);

export default modal;