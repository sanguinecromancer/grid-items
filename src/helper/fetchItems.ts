// Helping JEST to mock the fetches

export const url = 'http://54.73.73.228:4369/api/images';

export interface Item {
  id: string;
  title: string;
  image: string;
  description: string;
  index: number;
}

export let cache: Item[] = [];

export const fetchItems = async (): Promise<Item[]> => {
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error('Network response was not ok');
    }

    const data: Item[] = await resp.json();

    // Assuming data is an array of items, otherwise adjust accordingly
    if (Array.isArray(data) && data.length > 0) {
      cache = data;
      return cache;
    } else {
      throw new Error('No valid data available');
    }
  } catch (error) {
    if (cache.length > 0) {
      return cache;
    } else {
      throw new Error('No valid data available and no cached data');
    }
  }
};
