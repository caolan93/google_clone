import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeadersOptions from "./HeadersOptions";

const Header = () => {
	const router = useRouter();
	const searchInputRef = useRef(null);

	const search = (e) => {
		e.preventDefault();
		const term = searchInputRef.current.value;

		if (!term) return;

		router.push(`/search?term=${term}`);
	};

	const clear = () => {};
	return (
		<header className='stick top-0 bg-white'>
			<div className='flex w-full p-6 items-center'>
				<Image
					className='cursor-pointer'
					src='https://cdn.vox-cdn.com/thumbor/elWgLc36nmAT5U-i8aIaYR14LRc=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/12795665/VRG_ILLO_2927_007.jpg'
					height={50}
					width={150}
					alt='google image'
					onClick={() => router.push("/")}
				/>
				<form className='flex flex-grow px-6 py-3 ml-10 mr-5 borderborder-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
					<input
						className='flex-grow focus:outline-none w-full'
						ref={searchInputRef}
						type='text'
					/>

					<XIcon
						onClick={clear}
						className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
					/>
					<MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-200' />
					<SearchIcon
						onClick={search}
						className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-gray-200'
					/>
					<button hidden type='submit' onClick={search}>
						Search
					</button>
				</form>
				<Avatar
					className='ml-auto '
					url='https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg'
				/>
			</div>
			<HeadersOptions />
		</header>
	);
};

export default Header;
