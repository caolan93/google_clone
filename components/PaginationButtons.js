import { useRouter } from "next/router";
import Link from "next/link";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function PaginationButtons() {
	const router = useRouter();

	const startIndex = Number(router.query.start) || 0;

	return (
		<div className='flex max-w-lg text-blue-700 mb-10'>
			{startIndex >= 10 && (
				<Link
					Href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
					<div className='flex flex-grow items-center flex-col cursor-point hover:underline'>
						<ChevronLeftIcon className='h-5' />
						<p>Previous</p>
					</div>
				</Link>
			)}
			<Link Href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
				<div className='flex flex-grow items-center flex-col cursor-point hover:underline'>
					<ChevronRightIcon className='h-5' />
					<p>Next</p>
				</div>
			</Link>
		</div>
	);
}

export default PaginationButtons;
