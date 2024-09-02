import { useQuery } from "@tanstack/react-query";
import { getChampions } from "../../api/getChampions";
import LOLDropdown from "../../utils/LOLDropdown";
import { useState, version } from "react";
import { Champion } from "../../api/types_champion";
import getVersion from "../../api/getVersion";

function App() {
	const [champion, setChampion] = useState<Champion | undefined>();

	const {
		data: versionData,
		isError: isVersionDataError,
		error: versionDataError,
		isLoading: isVersionDataLoading,
	} = useQuery({
		queryKey: [version],
		queryFn: getVersion,
	});

	const {
		data: championData,
		isError: isChampionError,
		error: championError,
		isLoading: isChampionLoading,
	} = useQuery({
		queryKey: ["champions"],
		queryFn: () => getChampions(versionData),
	});

	if (isChampionLoading || isVersionDataLoading) {
		return <h1>is Loading...</h1>;
	}

	if (isVersionDataError || isChampionError) {
		return (
			<pre>
				{versionDataError
					? JSON.stringify(versionDataError)
					: JSON.stringify(championError)}
			</pre>
		);
	}

	if (championData) {
		return (
			<section className="app">
				<LOLDropdown
					options={championData || []}
					value={champion}
					setValue={setChampion}
				/>
				{champion && <pre>{JSON.stringify(champion)}</pre>}
			</section>
		);
	}
}

export default App;
