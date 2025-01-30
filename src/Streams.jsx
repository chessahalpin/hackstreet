import { useNavigate } from 'react-router-dom';
import Video2 from './assets/Video2.svg';
import { fetchFromLocalhost } from './coach-helper';
import { useState } from 'react';
import './Streams.css';

export function Streams() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = async () => {
        setIsLoading(true);
        const data = await fetchFromLocalhost();
        setIsLoading(false);
        console.log(data);
        navigate('/', { state: { data } });
        return data;
    };

    return (
        <div style={{ padding: 40, maxWidth: 1000 }}>
            <h2>Streams</h2>
            <div
                style={{
                    borderRadius: 8,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    padding: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 600 }}>Fridays Fortnite Fun</span> <span>3:30h</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <img src={Video2} alt="Video" style={{ cursor: 'pointer', width: '50%' }} />
                    <div>
                        <button onClick={handleClick} style={{ backgroundColor: '#FFFFFF', color: '#1D1D1D', border: 'none', borderRadius: 4 }}>
                            Get recommendation{' '}
                            {isLoading && (
                                <span
                                    className="loader"
                                    style={{
                                        width: '12px',
                                        height: '12px',
                                        border: '2px solid #1D1D1D',
                                        borderBottom: '2px solid transparent',
                                        borderRadius: '50%',
                                        display: 'inline-block',
                                        marginLeft: '8px',
                                        animation: 'rotation 1s linear infinite ',
                                    }}
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
