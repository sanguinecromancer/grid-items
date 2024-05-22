
export interface Item {
  id: string;
  title: string;
  image: string;
  description: string;
  index: number;
}
export interface ItemsResponse {
  items: Item[];
}
export interface FetchError {
  message: string;
}