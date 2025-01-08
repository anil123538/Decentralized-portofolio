import { useState, useEffect } from "react";
import './Experience.css';
import { SlCalender } from "react-icons/sl";

const Experience = ({ state }) => {
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);

    // Fetch Education Details
    useEffect(() => {
        const { contract } = state;
        const educationDetails = async () => {
            try {
                const educationData = await contract.methods.allEducationDetails().call();
                setEducation(educationData);
            } catch (error) {
                console.error("Error fetching education details:", error);
            }
        };
        if (contract) {
            educationDetails();
        }
    }, [state]);

    // Fetch Experience Details
    useEffect(() => {
        const { contract } = state;
        const experienceDetails = async () => {
            try {
                const experienceData = await contract.methods.allExperienceDetails().call();
                setExperience(experienceData);
            } catch (error) {
                console.error("Error fetching experience details:", error);
            }
        };
        if (contract) {
            experienceDetails();
        }
    }, [state]);

    return (
        <section className="exp-section">
            <h1 className="title">Experience & Education</h1>

            <div className="container">
                {/* Education Section */}
                <div className="education">
                    <h1 className="section-title">Education</h1>
                    {education.length > 0 ? (
                        education.map((edu, index) => (
                            <div className="edu-card" key={index}>
                                <p className="card-text1">
                                    <SlCalender className="icon" /> {edu.date}
                                </p>
                                <h3 className="card-text2">{edu.degree}</h3>
                                <p className="card-text3">{edu.knowledgeAcquired}</p>
                                <p className="card-text4">{edu.institutionName}</p>
                            </div>
                        ))
                    ) : (
                        <p>No education details available</p>
                    )}
                </div>

                {/* Experience Section */}
                <div className="education">
                    <h1 className="section-title">Experience</h1>
                    {experience.length > 0 ? (
                        experience.map((exp, index) => (
                            <div className="edu-card" key={index}>
                                <p className="card-text1">
                                    <SlCalender className="icon" /> {exp.date}
                                </p>
                                <h3 className="card-text2">{exp.post}</h3>
                                <p className="card-text3">{exp.knowledgeAcquired}</p>
                                <p className="card-text4">{exp.companyName}</p>
                            </div>
                        ))
                    ) : (
                        <p>No experience details available</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Experience;
