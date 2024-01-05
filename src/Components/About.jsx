import React,{useState} from 'react'
import './About.css'; 

export default function Modal() {
    const [modal, setModal] = useState(false);
  
    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  
    return (
      <>
        <button onClick={toggleModal} className="btn-modal">
          About
        </button>
  
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <div className='text-2xl mb-6'>About BrainSearch</div>
              <p>
              Welcome to BrainSearch – your AI-powered news and insights hub! Experience precision with our AI algorithms, delivering real-time updates and curated content tailored just for you. 
              <br/>
              <br/>
              Say goodbye to information overload and hello to a user-friendly interface, customizable alerts, and the future of informed decision-making. Dive into the latest news effortlessly with BrainSearch.
              <br/>
              <br/>
               Intelligence meets exploration here!
              
              </p>
              <button className="close-modal" onClick={toggleModal}>
                Close
              </button>
            </div>
          </div>
        )}
        
      </>
    );
  }