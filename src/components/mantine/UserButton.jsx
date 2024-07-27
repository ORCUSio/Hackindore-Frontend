import { UnstyledButton, Group, Avatar, Text, rem } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./UserButton.module.css";

export function UserButton({ user, onClick }) {
  return (
    <UnstyledButton className={classes.user} onClick={onClick}>
      <Group>
        <Avatar src={user.avatar} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {user.name}
          </Text>

          <Text c="dimmed" size="xs">
            {user.email}
          </Text>
        </div>

        <IconChevronRight
          style={{ width: rem(14), height: rem(14) }}
          stroke={1.5}
        />
      </Group>
    </UnstyledButton>
  );
}

import { Card, Image } from "@mantine/core";

export function UserDetails({ user }) {
  return (
    <Card shadow="sm" padding="lg">
      <Card.Section>
        <Image src={user.avatar} height={160} alt={user.name} />
      </Card.Section>
      <Text size="lg" weight={500}>
        {user.name}
      </Text>
      <Text size="sm" color="dimmed">
        {user.email}
      </Text>
    </Card>
  );
}
