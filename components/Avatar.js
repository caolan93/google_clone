import React from "react";

const Avatar = ({ url }) => {
	return (
		<img
			className='h-10 rounded-full'
			loading='lazy'
			src={url}
			alt='profile pic'
		/>
	);
};

export default Avatar;
