import { StaticImageData } from "next/image";

export interface IHome {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: null; name: string };
  title: string;
  url: string;
  urlToImage: undefined | string  
}
