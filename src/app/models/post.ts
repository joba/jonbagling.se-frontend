export interface Post {
  title: string;
  url: string;
  description?: string;
  agency?: string;
  tags: Tag[];
}

export interface Tag {
  id: number;
  name: string;
}
