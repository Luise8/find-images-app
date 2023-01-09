import client from "./settings";

export default async function getCuratedImages() {
  try {
    const photos = await client.photos
      .curated({ per_page: 10 })
      .then((photos) => {
        return photos;
      });

    return photos;
  } catch (reason) {
    console.log(reason);
  }
}
