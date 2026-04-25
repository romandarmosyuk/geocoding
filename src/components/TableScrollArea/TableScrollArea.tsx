import { useState } from "react";
import cx from "clsx";
import { ScrollArea, Table } from "@mantine/core";
import classes from "./TableScrollArea.module.scss";
import { CityMenu } from "@components/Menu";
import type { City } from "@interfaces/geocoding";

interface TableScrollAreaProps {
  cities: City[];
  isSearched: boolean;
}

export function TableScrollArea({ cities, isSearched }: TableScrollAreaProps) {
  const [scrolled, setScrolled] = useState(false);

  const rows = cities.map((city) => (
    <Table.Tr key={city.id}>
      <Table.Td>{city.name}</Table.Td>
      <Table.Td>{city.country}</Table.Td>
      <Table.Td>{city.latitude}</Table.Td>
      <Table.Td>{city.longitude}</Table.Td>
      <Table.Td>
        <CityMenu city={city} />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea
      h={300}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table miw={700}>
        <Table.Thead
          className={cx(classes.header, { [classes.scrolled]: scrolled })}
        >
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Country</Table.Th>
            <Table.Th>Latitude</Table.Th>
            <Table.Th>Longitude</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : isSearched ? (
            <Table.Tr>
              <Table.Td colSpan={5} style={{ textAlign: "center" }}>
                City not found
              </Table.Td>
            </Table.Tr>
          ) : null}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
