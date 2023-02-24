export default async function getImages(keyword, page) {
  try {
    const res = await fetch(
      `https://pixabay.com/api/?key=${
        process.env.REACT_APP_API_KEY
      }&image_type=photo&page=${page}&q=${encodeURIComponent(
        keyword
      )}&per_page=15`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    return error.message;
  }
}
