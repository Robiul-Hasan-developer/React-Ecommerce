import React from 'react';

const Heading = ({title, subtitle, styleLeft}) => {
    return (
        <>
            <div className={`section-heading ${styleLeft}`}>
                <h3 className='section-heading__title'> {title} </h3>   
                <p className='section-heading__desc fs-14'> {subtitle} </p>   
            </div>
        </>
    );
};

export default Heading;