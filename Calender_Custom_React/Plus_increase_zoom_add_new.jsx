
import React from 'react';

const Plus_increase_zoom_add_new = ({ color = 'grey',strokeWidth='0', strokeColor='currentColor', size = '64', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"

            width={size}
            height={size}
            fill={color}
            stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" 
            {...rest}

            viewBox="0 0 128 128">
            <g><line x1="13.787" x2="114.213" y1="64.001" y2="64.001"/><line x1="64" x2="64" y1="13.787" y2="114.213"/></g>
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default Plus_increase_zoom_add_new;
    
    