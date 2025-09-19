import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

const CardBody = () => {
    const [text, setText] = useState('');
    const [data, setData] = useState('');
    const [analysis, setAnalysis] = useState({
        output: '',
        burstiness: '',
        perplexity: '',
        perplexityPerLine: ''
    });

    const [buttonText, setButtonText] = useState('Analyze');

    useEffect(() => {
        fetchData();

    }, []);

    const fetchData = async () => {
        try {
            const { response } = await axios.get("http://127.0.0.1:5000");

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handelAnalysis = async (e) => {
       
        e.preventDefault();
        setButtonText('Analyzing...'); 
        try {
            const { data } = await axios.post("http://127.0.0.1:5000", { text });
            console.log(data);
            
            if (data) {
                setAnalysis({
                    output: data.output || "No output available",
                    burstiness: data.results.Burstiness || "N/A",
                    perplexity: data.results.Perplexity || "N/A",
                    perplexityPerLine: data.results["Perplexity per line"] || "N/A"
                });
            } else {
                setAnalysis({
                    output: "No response data",
                    burstiness: "N/A",
                    perplexity: "N/A",
                    perplexityPerLine: "N/A"
                });
            }
            setText(""); // Clear the text field after submission
        } catch (err) {
            console.error("Error during analysis:", err.message);
        }
        setButtonText('Analyze'); 
    };

    return (
        <section>
            <div className="popup">
                <textarea
                    name="textarea"
                    id="textarea"
                    cols={90}
                    rows={10}
                    placeholder="Enter your text..."
                    onChange={(e) => setText(e.target.value)}
                />
                <br />
                <button className="submit" id='analyzeBtn' onClick={handelAnalysis}>{buttonText}</button>
                <div className="plan">
                    <div className="inner">
                        <p className="title">{analysis.output || "No analysis available"}</p>
                        <ul className="features">
                            <li>
                                <span className="icon">
                                    <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                    </svg>
                                </span>
                                <span><strong>Burstiness: </strong> {analysis.burstiness}</span>
                            </li>
                            <li>
                                <span className="icon">
                                    <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                    </svg>
                                </span>
                                <span><strong>Perplexity: </strong> {analysis.perplexity}</span>
                            </li>
                            <li>
                                <span className="icon">
                                    <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                    </svg>
                                </span>
                                <span><strong>Perplexity per Line: </strong> {analysis.perplexityPerLine}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardBody;
