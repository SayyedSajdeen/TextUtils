export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : 'white'
    }

    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3'>About TextAnalyzer</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <p>
                                The TextAnalyzer project using React.js is a web application designed to analyze text input provided by users. Built with React.js, a JavaScript library for building user interfaces, the project offers a modern and dynamic user experience.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <p>
                                "Free to Use" indicates that the TextAnalyzer project using React.js is available for anyone to use without any cost or fees. This implies that users can access and utilize the application without having to pay for a license or subscription. The project may be open-source or provided under a permissive license, allowing users to freely use, modify, and distribute the software as needed.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <p>"Browser Compatible" means that the TextAnalyzer project using React.js is designed to work effectively across various web browsers. This includes popular browsers such as Google Chrome, Mozilla Firefox, Safari, Microsoft Edge, and others. Ensuring browser compatibility helps to ensure that users can access and use the application seamlessly regardless of the browser they prefer to use. The project likely incorporates web standards and practices to ensure consistent performance and functionality across different browsers and their versions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
