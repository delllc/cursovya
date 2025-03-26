import React from 'react';


type HeadingProps = {
    size: 'large' | 'medium';
    children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({size, children}) => {
    const styles = {
        large: {
            fontSize: '24px',
            color: '#5C6184',
            fontWeight: 900,
            textTransform: 'uppercase',
        },
        medium: {
            fontSize: '14px',
            fontWeight: 900,
            color: '#5C6184',
            textTransform: 'uppercase',
        }
    }

    const headingStyle = size === 'large' ? styles.large : styles.medium;

    // @ts-ignore
    return <p style={headingStyle}>{children}</p>
}

export default Heading;
