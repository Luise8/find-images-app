import client from "./settings";

export default async function getImages(query) {
  try {
    const photos = await client.photos
      .search({ query, per_page: 10 })
      .then((photos) => {
        return photos;
      });

    return photos;
  } catch (reason) {
    console.log(reason);
  }
}
