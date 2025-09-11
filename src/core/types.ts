export interface attributesTypes {
  [key: string]: string | number | boolean;
}

export interface ParamsType {
  tagName: string;
  classList?: string[];
  attributes?: attributesTypes;
  text?: string;
}

export interface TopicSubmition {
  approved_on: string;
  status: string;
}

export interface User {
  accepted_tos: boolean;
  bio: string;
  first_name: string;
  for_hire: boolean;
  id: string;
  instagram_username: string;
  last_name: string;
  links: Record<string, string>;
  location: string;
  name: string;
  portfolio_url: string;
  profile_image: Record<string, string>;
  social: Record<string, string>;
  total_collections: number;
  total_illustrations: number;
  total_likes: number;
  total_photos: number;
  total_promoted_illustrations: number;
  total_promoted_photos: number;
  twitter_username: null;
  updated_at: string;
  username: string;
}

export interface ImgInfo {
  alt_description: string;
  alternative_slugs: Record<string, string>;
  asset_type: string;
  blur_hash: string;
  breadcrumbs: [];
  color: string;
  created_at: string;
  current_user_collections: [];
  description: string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: Record<string, string>;
  promoted_at: string;
  slug: string;
  sponsorship: null | string;
  topic_submissions: Record<string, TopicSubmition>;
  updated_at: string;
  user: User;
  urls: Record<string, string>;
  width: number;
}

export interface AnswerTypes {
  results: ImgInfo[];
  total: number;
  total_pages: number;
}
