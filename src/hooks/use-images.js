// Hook to handle search of images

import { useEffect, useState } from "react";
import getImages from "services/get-images";
import useInfinityScroll from "./use-infinity-scroll";

const INITIALPAGE = 1;
export default function useImages({ keyword, elementRef }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingPage, setLoadingPage] = useState(false);
  const [pageResult, setPageResult] = useState({});
  const [page, setPage] = useState(INITIALPAGE);

  useEffect(() => {
    setLoading(true);
    getImages(keyword, page).then((result) => {
      setPageResult({
        page: page,
        per_page: result.hits.length,
        total_results: result.total,
      });
      setImages(result.hits);
      setLoading(false);
    });
  }, [keyword]);

  useEffect(() => {
    if (page === INITIALPAGE) return;
    setLoadingPage(true);
    getImages(keyword, page).then((result) => {
      setPageResult({
        page: page,
        per_page: result.hits.length,
        total_results: result.total,
      });
      setImages((prev) => {
        const ids = new Set(prev.map((d) => d.id));
        const merged = [...prev, ...result.hits.filter((d) => !ids.has(d.id))];
        return merged;
      });
      setLoadingPage(false);
    });
  }, [page]);

  useInfinityScroll({ pageResult, setPage, elementRef });

  return {
    images,
    pageResult,
    setPageResult,
    setPage,
    page,
    loading,
    loadingPage,
  };
}
