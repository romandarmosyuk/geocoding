import { Button, NativeSelect, NumberInput } from "@mantine/core";
import { useNavigate, useOutletContext } from "react-router";
import cls from "./SettingsPage.module.scss";
import type { ContextOutlet } from "@interfaces/contextOutlet";
import { appRoutes } from "@consts/appRoutes";

export const SettingsPage = () => {
  const { count, setCount, language, setLanguage } =
    useOutletContext<ContextOutlet>();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(appRoutes.SEARCH);
  };

  return (
    <div className={cls.settings}>
      <h1>Search settings</h1>
      <NativeSelect
        label="Language"
        value={language}
        onChange={(event) => setLanguage(event.currentTarget.value)}
        data={[
          { value: "en", label: "English" },
          { value: "ru", label: "Russian" },
        ]}
      />
      <NumberInput
        value={count}
        label="Count"
        placeholder="Don't enter more than 100 and less than 1"
        min={1}
        max={100}
        onChange={setCount}
      />
      <Button className={cls.button} onClick={handleClick} variant="filled">
        Save
      </Button>
    </div>
  );
};
