import { IconDots, IconSwitchHorizontal } from "@tabler/icons-react";
import { ActionIcon, Group, Menu, useMantineTheme } from "@mantine/core";
import { generatePath, Link } from "react-router";
import type { City } from "@interfaces/geocoding";
import { appRoutes } from "@consts/appRoutes";

interface CityMenuProps {
  city: City;
}
export function CityMenu({ city }: CityMenuProps) {
  const theme = useMantineTheme();
  return (
    <Group justify="center">
      <Menu
        withArrow
        width={300}
        position="bottom"
        transitionProps={{ transition: "pop" }}
        withinPortal
      >
        <Menu.Target>
          <ActionIcon variant="default" aria-label="User settings">
            <IconDots size={16} stroke={1.5} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            leftSection={
              <IconSwitchHorizontal
                size={16}
                stroke={1.5}
                color={theme.colors.yellow[6]}
              />
            }
          >
            <Link to={generatePath(appRoutes.CITY, { id: String(city.id) })}>
              More about the city
            </Link>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
