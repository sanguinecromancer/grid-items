import fetchMock from 'jest-fetch-mock';
import { fetchItems, cache, url } from '../src/helper/fetchItems';

fetchMock.enableMocks();

describe('fetchItems API', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    cache.length = 0;
  });

  test('should fetch items and update the cache', async () => {
    const mockData = [
      { id: '1', title: 'Item 1', image: 'img1.jpg', description: 'Description 1', index: 1 },
      { id: '2', title: 'Item 2', image: 'img2.jpg', description: 'Description 2', index: 2 },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const items = await fetchItems();

    expect(Array.isArray(items)).toBe(true);
    expect(items.length).toBeGreaterThan(0);
    expect(cache.length).toBeGreaterThan(0);
    expect(cache).toEqual(items);
  });

  test('should return cached items if the API call fails', async () => {
    // Set initial cache
    const initialCache = [
      { id: '1', title: 'Item 1', image: 'img1.jpg', description: 'Description 1', index: 1 },
    ];
    cache.push(...initialCache);

    fetchMock.mockRejectOnce(new Error('Failed to fetch'));

    try {
      const items = await fetchItems();
      expect(items).toEqual(initialCache);
    } catch (error) {
      // Ensure the error is properly handled
      expect(error.message).toBe('No valid data available and no cached data');
    }
  });
});
