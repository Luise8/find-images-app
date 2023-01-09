import { useEffect, useState } from "react";
import getImages from "services/get-images";

export default function useImages(keyword) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageResult, setPageResult] = useState({});

  useEffect(() => {
    setLoading(true);
    getImages(keyword).then((result) => {
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
  }, [keyword]);

  return { images, pageResult, loading };
}
