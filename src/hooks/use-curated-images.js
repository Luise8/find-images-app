import { useEffect, useState } from "react";
import getCuratedImages from "services/get-curated-images";
import useInfinityScroll from "./use-infinity-scroll";

const INITIALPAGE = 1;
export default function useCuratedImages(elementRef) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingPage, setLoadingPage] = useState(false);
  const [pageResult, setPageResult] = useState({});
  const [page, setPage] = useState(INITIALPAGE);

  useEffect(() => {
    setLoading(true);
    getCuratedImages(page).then((result) => {
      setPageResult({
        page: result.page,
        per_page: result.per_page,
        total_results: result.total_results,
        prev_page: result.prev_page,
        next_page: result.next_page,
      });
      setImages(images.concat(result.photos));
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (page === INITIALPAGE) return;
    setLoadingPage(true);
    getCuratedImages(page).then((result) => {
      setPageResult({
        page: result.page,
        per_page: result.per_page,
        total_results: result.total_results,
        prev_page: result.prev_page,
        next_page: result.next_page,
      });
      setImages((prev) => {
        const ids = new Set(prev.map((d) => d.id));
        const merged = [
          ...prev,
          ...result.photos.filter((d) => !ids.has(d.id)),
        ];
        return merged;
      });
      setLoadingPage(false);
    });
  }, [page]);

  useInfinityScroll({ pageResult, setPage, elementRef });

  return { images, pageResult, setPageResult, setPage, page, loading };
}
