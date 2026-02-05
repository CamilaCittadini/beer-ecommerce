const API_URL = import.meta.env.VITE_API_URL ?? '';

export const getImgSrc = (image) => {
  return image ? `${API_URL}${image.startsWith('/') ? '' : '/'}${image}` : '';
};
