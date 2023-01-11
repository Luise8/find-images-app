import client from "./settings";

export default async function getCuratedImages(page = 1) {
  try {
    const photos = await client.photos
      .curated({ page, per_page: 20 })
      .then((photos) => {
        return photos;
      });

    return photos;
  } catch (reason) {
    console.log(reason);
  }
}
