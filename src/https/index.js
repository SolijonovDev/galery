export const Api = {
  async getImage(imageId) {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/photos/${imageId}?client_id=${
        import.meta.env.VITE_CLIENT_ID
      }`,
    );
    const data = await res.json();

    return data;
  },
  async getImages(query) {
    const res = await fetch(
      `${
        import.meta.env.VITE_BASE_URL
      }/search/photos?query=${query}&client_id=${
        import.meta.env.VITE_CLIENT_ID
      }&per_page=9`,
    );
    const data = await res.json();

    return data;
  },
};
