import { BlocksContent } from "@strapi/blocks-react-renderer";

export type PostID = number;
 
export type AuthorAttributesData = {
  name: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};
 
export type PostAuthor = {
  data: {
    id: PostID;
    attributes: AuthorAttributesData;
  };
};
 
export type CategoryAttributesData = {
  name: string;
  created_by: number;
  updated_by: number;
  publishedAt: string;
};
 
export type PostCategory = {
  data: {
    id: PostID;
    attributes: CategoryAttributesData;
  };
};
 
export type PostCreatedBy = {
  id: PostID;
  firstname: string;
  lastname: string;
  username: null;
};
 
export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};
 
export type PostCover = PostCoverFormat & {
  data: PostCoverData;
};

export type PostCoverData = {
  id: PostID;
  attributes: PostCoverDataAttributes;
}

export type PostCoverDataAttributes = {
  alternativeText: string;
  caption: string;
  previewUrl: null;
  provider: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  formats?: {
    thumbnail: PostCoverFormat;
    small: PostCoverFormat;
    medium: PostCoverFormat;
    large: PostCoverFormat;
  };
  url?: string;
}
 
// type PostCoverDataAttributesBase = {
//   alternativeText: string;
//   caption: string;
//   previewUrl: null;
//   provider: string;
//   created_by: number;
//   updated_by: number;
//   created_at: string;
//   updated_at: string;
// };

// type PostCoverDataAttributesWithFormats = PostCoverDataAttributesBase & {
//   formats: {
//     thumbnail: PostCoverFormat;
//     small: PostCoverFormat;
//     medium: PostCoverFormat;
//     large: PostCoverFormat;
//   };
//   url?: never;
// };

// type PostCoverDataAttributesWithUrl = PostCoverDataAttributesBase & {
//   formats?: never;
//   url: string;
// };

// type PostCoverDataAttributes = PostCoverDataAttributesWithFormats | PostCoverDataAttributesWithUrl;


export type PostAttributesData = {
  title: string;
  content: BlocksContent;
  slug: string;
  author: PostAuthor;
  category: PostCategory;
  created_by: PostCreatedBy;
  updated_by: PostCreatedBy;
  createdAt: string;
  updated_at: string;
  cover: PostCover;
};
 
export type PostData = {
    id: PostID;
    attributes: PostAttributesData;
};

// TYPE USED ON THE RESPONSE OF get-all-posts.ts WHEN IT IS ASKED TO RETURN count TOO
export type PostResponse =  {
  data: PostData[],
  pagination: number
} | PostData[];