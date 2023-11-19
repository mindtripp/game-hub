import useData from "./useData";
import { Platform } from "./useGames";

interface Props {
  id: number;
  name: string;
  slugh: string;
}

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
