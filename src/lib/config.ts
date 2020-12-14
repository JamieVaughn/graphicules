import config from "../../config.json";

type Config = {
  readonly base_url: string;
  readonly site_title: 'Graphicules';
  readonly site_description: 'Compounds of graphs & stories for an illuminating visual chemistry';
  readonly site_keywords: { keyword: string }[];
  readonly posts_per_page: 6;
  readonly twitter_account: 'graphicules';
  readonly github_account: 'JamieVaughn';
};

export default config as Config;
