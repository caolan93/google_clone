import Head from "next/head";
import Header from "../components/Header";
import HeadersOptions from "../components/HeadersOptions";
import SearchResults from "../components/SearchResults";

import { useRouter } from "next/router";

import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";

function Search({ results }) {
	console.log(results);
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>Search Results</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* Header */}
			<Header />
			{/* Search Results */}
			<SearchResults />
		</div>
	);
}

export default Search;

export async function getServerSideProps(context) {
	const useDummyData = true;

	const startIndex = context.query.start || 0;

	const data = useDummyData
		? Response
		: await fetch(
				`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
		  ).then((response) => response.json());

	// AFTER SERVER HAS RENDERED => PASS TO CLIENTS
	return {
		props: {
			results: data,
		},
	};
}
