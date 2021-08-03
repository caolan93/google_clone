import Head from "next/head";
import Header from "../components/Header";
import HeadersOptions from "../components/HeadersOptions";

function Search() {
	return (
		<div>
			<Head>
				<title>Search Results</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* Header */}
			<Header />
			{/* Search Results */}
			<HeadersOptions />
		</div>
	);
}

export default Search;
