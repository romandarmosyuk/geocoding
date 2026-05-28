import type { ContextOutlet } from "@interfaces/contextOutlet";
import cls from "./SearchPage.module.scss";
import { useState } from "react";
import { useOutletContext } from "react-router";
import { useDebounce } from "@hooks/useDebounce";
import { useSearchCities } from "@hooks/useSearchCities";
import { InputWithButton } from "@components/InputWithButton";
import { TableScrollArea } from "@components/TableScrollArea";

export const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const { count, language } = useOutletContext<ContextOutlet>();

  const debounceSearchValue = useDebounce(searchValue, 600);
  const { cities, isSerched } = useSearchCities(
    debounceSearchValue,
    count,
    language,
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <section className={cls.search}>
      <h1>Search for cities</h1>
      <InputWithButton value={searchValue} onChange={handleChange} />
      <TableScrollArea cities={cities} isSearched={isSerched} />
    </section>
  );
};
