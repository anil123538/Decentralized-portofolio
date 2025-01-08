import React, { useEffect, useState} from 'react'
import { Modal, ModalBody, Row } from "reactstrap"
import heroImg from '../../assets/anil.png'
import './Hero.css'

const Hero = ({state}) => {
    const [modal, setModal] = useState(false);
    const [description,setDescription]=useState("");
    const [cid,setCid]=useState("");
    useEffect(()=>{
      const {contract}=state;
      const description=async()=>{
        const descriptionText = await contract.methods.description().call();
        setDescription(descriptionText);
      }
      contract && description();
    },[state])
    useEffect(()=>{
        const {contract}=state;
        const cidOfImage=async()=>{
          const cid = await contract.methods.imageLink().call();
          setCid("QmegDi66MGWRKMqeUEBVZJfo4F6zLvLjC41hq7C5WdGRXz");
        }
        contract && cidOfImage();
      },[state])
    return (
        <section className="hero">
        <div className="container">
            <div className="hero-text">
                <p><span>Anil Bhattarai </span>
                    is a Computer Engineer  From Nepal.</p>
                <h1>I do Full stack web development.</h1>
                <h3>{description}</h3>
                {/*  =========popup bootstrap==========  */}

                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                            <Row className="text-align">
                                <label htmlFor="" toggle={() => setModal(!modal)}>
                                    Mail Id - bhattaraianil18.com
                                </label>

                            </Row>
                    </ModalBody>
                </Modal>

                <button className="msg-btn" onClick={() => setModal(true)}>Get in Touch</button>
                {/*  =========popup bootstrap end==========  */}

            </div>
            <div className="hero-img">

                <div className="img-container">
                    <img src={`https://beige-central-catfish-885.mypinata.cloud/ipfs/${cid}`} alt="profilePhoto" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero
