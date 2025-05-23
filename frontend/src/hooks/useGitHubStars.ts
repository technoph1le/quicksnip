import { useFetch } from "@hooks/useFetch";
import { GITHUB_API } from "@utils/consts";

type GitHubRepo = {
  stargazers_count: number;
};

const useGitHubStars = () => {
  const { data, loading, error } = useFetch<GitHubRepo>(GITHUB_API);

  const starsAmount = data?.stargazers_count ?? 0;

  return { starsAmount, loading, error };
};

export default useGitHubStars;
