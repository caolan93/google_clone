import Head from "next/head";
import Header from "../components/Header";
import HeadersOptions from "../components/HeadersOptions";

import { API_KEY, CONTEXT_KEY } from "../keys";

function Search({ results }) {
	console.log(results);
	return (
		<div>
			<Head>
				<title>Search Results</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* Header */}
			<Header />
			<HeadersOptions />
			{/* Search Results */}
		</div>
	);
}

export default Search;

export async function getServerSideProps(context) {
	const useDummyData = false;

	const data = await fetch(
		`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q${context.query.term}`
	).then((response) => response.json());

	// AFTER SERVER HAS RENDERED => PASS TO CLIENTS
	return {
		props: {
			results: data,
		},
	};
}
