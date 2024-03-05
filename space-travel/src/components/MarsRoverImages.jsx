import React, { useState } from 'react';
import './MarsRoverImages.css';

const MarsRoverImages = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [imageDate, setImageDate] = useState('');

    const handleFetchImage = async () => {
        setIsLoading(true);
        try {
            const API_KEY = 'PgNOELaQhomfLlF9kHWfJqKtaW86dNeemrcdxKtC';
            const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`);
            const data = await response.json();

            if (data.photos.length === 0) {
                console.error('No photos found in the response');
                return;
            }

            const randomIndex = Math.floor(Math.random() * data.photos.length);
            const randomPhoto = data.photos[randomIndex];

            setImageUrl(randomPhoto.img_src);
            setImageDate(randomPhoto.earth_date);

        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    };

    return (
        <div className='container'>
            <div className="mars-rover-container">
                <h2 className="mars-rover-title">Random Mars Rover Image Generator</h2>
                <button className="fetch-button" onClick={handleFetchImage} disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Show Random Mars Image'}
                </button>
                {imageUrl && (
                    <div className="image-container">
                        <h3>{imageDate}:</h3>
                        <img src={imageUrl} alt="Mars Rover Image" className='image' />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MarsRoverImages;