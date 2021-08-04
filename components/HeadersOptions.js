import {
	DotsVerticalIcon,
	MapIcon,
	NewspaperIcon,
	PhotographIcon,
	PlayIcon,
	SearchIcon,
} from "@heroicons/react/outline";

import HeaderOption from "./HeaderOption";

const HeadersOptions = () => {
	return (
		<div>
			{/* Left Section */}
			<div className='flex space-x-6'>
				<HeaderOption Icon={SearchIcon} title='All' selected />
				<HeaderOption Icon={PhotographIcon} title='Images ' />
				<HeaderOption Icon={PlayIcon} title='Videos' />
				<HeaderOption Icon={NewspaperIcon} title='News' />
				<HeaderOption Icon={MapIcon} title='Maps' />
				<HeaderOption Icon={DotsVerticalIcon} title='More' />
			</div>

			{/* Right Section */}
			<div className='flex space-x-4'>
				<p className='link'>Settings</p>
				<p className='link'>Tools</p>
			</div>
		</div>
	);
};

export default HeadersOptions;
