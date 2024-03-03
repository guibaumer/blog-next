export const API_URL = 'http://localhost:1337/api';
export const POSTS_URL = `${API_URL}/posts?populate=*`;
export const POSTS_URL_MAX = `${API_URL}/posts?populate=*&_populate[author][_populate][0]=name&_populate[category][_populate][0]=name`

export const SITE_NAME = 'BLOG';
export const HOME = 'https://main--blogstrapi.netlify.app/';
export const SITE_URL = 'http://localhost:3000/' || 'https://main--blogstrapi.netlify.app/';