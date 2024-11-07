import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Events = {
	records: {
		id: string;
		createdTime: string;
		fields: {
			Name: string;
			Status: string;
			Headline: string;
			Date: string;
		};
	}[];
};

export default function useEventQuery(date: string | undefined) {
	console.log(date);

	const queryKey = ["events", date];
	const queryFn = async (): Promise<Events> => {
		const { data } = await axios.get(
			`https://api.airtable.com/v0/appRqb5HifwovS59P/tblORH2MwYd6bxudj?fields%5B%5D=Date&fields%5B%5D=Name&fields%5B%5D=Status&fields%5B%5D=Headline&filterByFormula=DATESTR({Date})='${date}'`,
			{
				headers: {
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_PERSONAL_ACCESS_TOKEN}`,
				},
			}
		);

		return data;
	};
	return useQuery({ queryKey, queryFn });
}
