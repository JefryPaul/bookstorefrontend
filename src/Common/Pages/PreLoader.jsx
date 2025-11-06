import React from 'react';

function PreLoader() {
    return (
        <>
            <div 
                className='w-full h-screen flex justify-center items-center' 
                style={{ backgroundColor: '#7AC6CF' }}
            >
                <img 
                    src="https://cdn.dribbble.com/userupload/20166759/file/original-f77ea42c152affea098191f743270208.gif" 
                    alt="Preloader" 
                />
            </div>
        </>
    );
}

export default PreLoader;
