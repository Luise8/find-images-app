import client from "./settings";

export default async function getImages(query, page) {
  try {
    const photos = await client.photos
      .search({ query, per_page: 20, page })
      .then((photos) => {
        return photos;
      });

    return photos;
  } catch (reason) {
    console.log(reason);
  }
}
