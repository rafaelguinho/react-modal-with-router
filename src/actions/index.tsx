export interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CatBreed {
  description: string;
  wikipedia_url: string;
}


export const getCatImage = async (id: string): Promise<CatImage> => {
  const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
  return await response.json();
};


export const searchCatBreed = async (breedName: string): Promise<CatBreed[]> => {
  const response = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`);
  return await response.json();
};