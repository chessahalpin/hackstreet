import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const FirstStreamCongrats = () => {
    const navigate = useNavigate();
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleNavigation = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            navigate('/streams');
        }, 500); // Match this with CSS transition duration
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: isTransitioning ? 0 : 1,
                transition: 'opacity 0.5s ease-in-out',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    borderRadius: '8px',
                    color: 'white',
                    textAlign: 'center',
                    padding: '32px',
                    margin: '32px',
                    width: '40%',
                }}
            >
                <img src="/StreamlabsLogo.svg" alt="Stream Icon" style={{ width: '64px', height: '64px', marginBottom: '16px' }} />
                <h1 style={{ fontSize: '24px', fontWeight: '600' }}>Good job with your first stream!</h1>
                <p style={{ color: '#94A3B8', marginTop: '8px' }}>You're on the road to your first 5 followers!</p>
                <button
                    style={{
                        marginTop: '24px',
                        padding: '12px 24px',
                        backgroundColor: '#86EFAC',
                        color: 'black',
                        fontWeight: '600',
                        borderRadius: '9999px',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#4ADE80')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#86EFAC')}
                    onClick={handleNavigation}
                >
                    Power Up Your Creator Journey
                </button>
            </div>
        </div>
    );
};

export default FirstStreamCongrats;
