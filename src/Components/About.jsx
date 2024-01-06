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
            <div className="modal-content ">
              <div className='text-2xl mb-6'>About BrainSearch</div>
              <p>
              Welcome to BrainSearch, your gateway to a smarter and more efficient news exploration experience. Powered by cutting-edge GPT technology, BrainSearch is not just a search engine—it's an AI-driven portal that revolutionizes the way you discover the latest news and real-time insights.
              <br/>
              <br/>
              Say goodbye to information overload and hello to curated, insightful results. Whether you're tracking global events, industry trends, or local news, BrainSearch tailors its responses to your preferences, ensuring that you receive the most pertinent and up-to-date information at your fingertips.
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