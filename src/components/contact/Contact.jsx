import {useState,useEffect} from "react";
import './Contact.css'

const Contact = ({state}) => {
    const [resume,setResume]=useState("");
    useEffect(()=>{
        const {contract}=state;
        const resumeDetails=async()=>{
            const resumeCid = await contract.methods.resumeLink().call();
            setResume("https://beige-central-catfish-885.mypinata.cloud/ipfs/"+resumeCid);
        }
        contract && resumeDetails();
    },[state])
    
    return (
        <section className="contact-section">
            <h1 className="title">
               If you are interested !
                Get in touch with me 
            </h1>
            <a href={resume} target='_blank' rel="noopener noreferrer">
                <button className="downlodeBTN">
                    View Resume
                </button>
            </a>

        </section>
    )
}

export default Contact
