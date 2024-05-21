// src/features/items/itemsTypes.ts

// Example data types for an item
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
  
  // Example error type
  export interface FetchError {
    message: string;
  }
  