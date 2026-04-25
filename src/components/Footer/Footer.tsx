import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { ActionIcon, Anchor, Container, Group } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./Footer.module.css";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Store" },
  { link: "#", label: "Careers" },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <footer className={classes.footer}>
      <Container size="md">
        <div className={classes.inner}>
          <MantineLogo size={28} />

          <Group className={classes.links}>{items}</Group>

          <Group gap="xs" justify="flex-end" wrap="nowrap">
            <ActionIcon
              size="lg"
              variant="default"
              radius="xl"
              aria-label="Twitter"
            >
              <IconBrandTwitter size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              size="lg"
              variant="default"
              radius="xl"
              aria-label="YouTube"
            >
              <IconBrandYoutube size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              size="lg"
              variant="default"
              radius="xl"
              aria-label="Instagram"
            >
              <IconBrandInstagram size={18} stroke={1.5} />
            </ActionIcon>
          </Group>
        </div>
      </Container>
    </footer>
  );
}
