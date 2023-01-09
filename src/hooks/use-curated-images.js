import { useEffect, useState } from "react";
import getCuratedImages from "services/get-curated-images";

export default function useCuratedImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageResult, setPageResult] = useState({});

  useEffect(() => {
    setLoading(true);
    getCuratedImages().then((result) => {
      setPageResult({
        page: result.page,
        per_page: result.per_page,
        total_results: result.total_results,
        prev_page: result.prev_page,
        next_page: result.next_page,
      });
      setImages(result.photos);
      setLoading(false);
    });
  }, []);

  return { images, pageResult, loading };
}
