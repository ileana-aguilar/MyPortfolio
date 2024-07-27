import React from "react";
import './Project.css';

const Project = ({ image, name, techstack, description, githuburl, websiteurl }) => {

    const projectLink = websiteurl ? websiteurl : githuburl;

    return (
        <a className="project-link" href={projectLink} target="_blank" rel="noreferrer">
            <div className='project'>
                <div className="project-img">
                    <img src={image} alt={name} />
                </div>
                <div className="project-details">
                    <h2>{name} 
                        <svg className="link" width="20" height="20" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M204 64V168C204 171.183 202.736 174.235 200.485 176.485C198.235 178.736 195.183 180 192 180C188.817 180 185.765 178.736 183.515 176.485C181.264 174.235 180 171.183 180 168V93L72.4901 200.49C70.2357 202.744 67.1782 204.011 63.9901 204.011C60.8019 204.011 57.7444 202.744 55.4901 200.49C53.2357 198.236 51.9692 195.178 51.9692 191.99C51.9692 188.802 53.2357 185.744 55.4901 183.49L163 76H88.0001C84.8175 76 81.7652 74.7357 79.5148 72.4853C77.2643 70.2348 76.0001 67.1826 76.0001 64C76.0001 60.8174 77.2643 57.7652 79.5148 55.5147C81.7652 53.2643 84.8175 52 88.0001 52H192C195.183 52 198.235 53.2643 200.485 55.5147C202.736 57.7652 204 60.8174 204 64Z" fill="aliceblue"/>
                        </svg>
                    </h2> 
                    <p>{description}</p>
                    {techstack && (
                        <div className='skills-div'>
                            <ul className='skills'>
                                {techstack.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className='project-links'>
                    <div className="project-github">
                        <a href={githuburl}>
                            <svg width="36" height="21" viewBox="0 0 454 439" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3_41)">
                                    <path d="M119.459 112.97C114.73 101.3 114.919 87.9651 117.018 75.7646C131.47 79.9636 145.045 86.5886 157.122 95.3366C162.418 99.251 169.361 100.513 175.83 98.6291C192.429 93.8152 209.671 91.399 227 91.4588C245.179 91.4588 262.45 94.0196 278.132 98.6108C284.601 100.513 291.544 99.2328 296.821 95.3183C308.893 86.5722 322.461 79.9472 336.906 75.7463C339.006 87.9468 339.176 101.281 334.484 112.933C331.647 119.957 333.066 128.042 338.419 133.786C352.115 148.474 359.417 165.357 359.417 182.917C359.417 221.586 322.151 259.504 262.298 271.046C247.316 273.936 241.471 292.173 252.935 302.618C260.293 309.313 264.833 318.751 264.833 329.25V384.125C264.833 388.977 266.826 393.629 270.374 397.06C273.921 400.49 278.733 402.417 283.75 402.417C288.767 402.417 293.579 400.49 297.126 397.06C300.674 393.629 302.667 388.977 302.667 384.125V329.25C302.667 318.824 300.397 308.91 296.348 299.929C353.42 280.778 397.25 237.664 397.25 182.917C397.25 158.278 388.094 135.633 372.904 116.665C376.877 101.666 376.517 86.5566 375.004 74.9597C373.661 64.5701 371.788 50.9611 364.221 42.8396C352.966 30.7853 334.333 37.8825 321.091 42.2542C306.88 46.886 293.364 53.3132 280.894 61.369C263.284 57.017 245.176 54.8352 227 54.8755C208.197 54.8755 190.056 57.1619 173.069 61.3873C160.598 53.3315 147.082 46.9043 132.871 42.2725C119.629 37.8825 100.977 30.7853 89.7217 42.8396C82.0037 51.1074 80.3958 63.6372 79.0149 74.2829L78.9203 74.978C77.407 86.5932 77.0665 101.72 81.039 116.738C65.9056 135.688 56.75 158.297 56.75 182.917C56.75 237.646 100.58 280.778 157.651 299.929C153.528 309.064 151.378 318.917 151.333 328.885L148.155 329.507C134.592 331.317 125.909 329.689 120.007 327.275C105.631 321.385 98.2153 306.551 89.1732 295.21C83.536 288.167 75.3261 279.369 62.7276 275.308C60.3702 274.549 57.8812 274.247 55.4027 274.418C52.9243 274.589 50.505 275.23 48.2829 276.305C43.7952 278.477 40.3834 282.283 38.7981 286.887C37.2127 291.491 37.5836 296.515 39.8292 300.854C42.0748 305.194 46.0112 308.493 50.7723 310.026C61.3278 313.428 68.6297 330.915 75.3262 338.671C82.3821 346.865 91.7647 355.426 105.214 360.95C118.116 366.255 133.268 368.139 151.333 365.998V384.125C151.333 388.977 153.326 393.629 156.874 397.06C160.421 400.49 165.233 402.417 170.25 402.417C175.267 402.417 180.079 400.49 183.626 397.06C187.174 393.629 189.167 388.977 189.167 384.125V329.25C189.167 318.751 193.707 309.313 201.065 302.618C212.548 292.155 206.683 273.936 191.701 271.046C131.83 259.504 94.5833 221.586 94.5833 182.917C94.5833 165.394 101.866 148.511 115.543 133.822C120.896 128.079 122.296 119.994 119.459 112.97Z" fill="#F0F8FF"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_41">
                                        <rect width="454" height="439" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                    {websiteurl && (
                        <div className="project-website">
                            <a href={websiteurl}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 6H6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V12M11 13L20 4M20 4H15M20 4V9" stroke="#F0F8FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </a>
    )
};

export default Project;
