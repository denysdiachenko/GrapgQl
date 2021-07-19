import React from "react";
import {useQuery} from "@apollo/client";
import {GET_BOOKS} from "../GraphQL/Queries";

const RateView = ()=>{
	const {loading,error,data} = useQuery(GET_BOOKS);
	if(loading) return <p>Loading...</p>
	if(error) return <p>Error</p>
	console.log(data);
	return data.books.map(({ id, title,author }) => (
		<div key={id}>
			<p>
				{title}: {author}
			</p>
		</div>
	));
}

export default RateView