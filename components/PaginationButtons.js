import { useRouter } from "next/router";
import Link from "next/router";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function PaginationButtons() {
	const router = useRouter();

	const startIndex = Number(router.query.start) || 0;

	return (
		<div>
			{startIndex >= 10 && (
				<Link
					href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
					<div>
						<ChevronLeftIcon className='h-4' />
						<p>Previous</p>
					</div>
				</Link>
			)}
			<Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
				<div>
					<ChevronRightIcon className='h-4' />
					<p>Next</p>
				</div>
			</Link>
		</div>
	);
}

export default PaginationButtons;
