import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './SubpageNav.css';

const SubpageNav = () => {
    const navigate = useNavigate();

    return (
        <div className="subpage-nav-container">
            <button className="subpage-back-button" onClick={() => navigate(-1)}>
                <FaArrowLeft />
                <span>Back</span>
            </button>
        </div>
    );
};

export default SubpageNav;
