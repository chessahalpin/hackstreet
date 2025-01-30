/* eslint-disable react/prop-types */
import PlayButton from './assets/media-share-2.png';

const Card = ({ title, description, button, video, icon }) => {
    return (
        <div
            style={{
                backgroundColor: '#09161D',
                padding: 16,
                width: '100%',
                borderRadius: 8,
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gridTemplateRows: 'repeat(3, auto)',
                gap: 10,
            }}
        >
            {/* Icon Column */}
            {icon && (
                <div
                    style={{
                        gridRow: '1 / span 3',
                        gridColumn: '1/2',
                        padding: '5px 10px 10px 10px',
                    }}
                >
                    <img src={icon} alt="Icon" />
                </div>
            )}

            {/* First Column Items */}
            <div
                style={{
                    gridRow: '1/2',
                    gridColumn: '2/3',
                    fontSize: 16,
                    overflow: 'hidden',
                    wordWrap: 'break-word',
                    fontWeight: 500,
                }}
            >
                {title}
            </div>
            <div
                style={{
                    gridRow: '2/3',
                    gridColumn: '2/3',
                    fontSize: 14,
                    fontWeight: 400,
                    overflow: 'hidden',
                    wordWrap: 'break-word',
                    color: '#BDC2C4',
                }}
            >
                {description}
            </div>
            {button && (
                <div
                    style={{
                        gridRow: '3/4',
                        gridColumn: '2/3',
                        height: 'fit-content',
                    }}
                >
                    <button style={{ width: 155, fontSize: 14 }}>{button}</button>
                </div>
            )}

            {video && (
                <div
                    style={{
                        gridRow: '1 / span 3',
                        gridColumn: '3/4',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <img src={video} alt="Video" style={{ cursor: 'pointer' }} />
                    <img
                        src={PlayButton}
                        alt="Play Button"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1,
                            cursor: 'pointer',
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default Card;
