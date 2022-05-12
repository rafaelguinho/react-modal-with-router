export interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

export const getCatImage = async (id: string): Promise<CatImage> => {
  const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
  return await response.json();
};
