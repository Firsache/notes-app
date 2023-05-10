import { useCallback, useState } from "react";

export const useSearch = () => {
  const [searchedQuery, setSearchedQuery] = useState("");

  const search = useCallback((query) => {
    setSearchedQuery(query);
  }, []);
  return { searchedQuery, search };
};
