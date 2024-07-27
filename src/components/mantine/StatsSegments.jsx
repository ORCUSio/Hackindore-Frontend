import React from 'react';
import { Progress, Box, Text, Group, Paper, SimpleGrid, rem } from '@mantine/core';
import { IconArrowUpRight, IconDeviceAnalytics } from '@tabler/icons-react';

const data = [
  { label: 'Allocated Fund', count: '$5000', part: 100, color: '#47d6ab' },
  { label: 'Workers Expense', count: '$2000', part: 40, color: '#03141a' },
  { label: 'Resources Expense', count: '$1500', part: 30, color: '#4fcdf7' },
  { label: 'Miscellaneous Expense', count: '$1000', part: 20, color: '#f78e47' },
  { label: 'Remaining Fund', count: '$500', part: 10, color: '#f74f78' },
];

export default function StatsSegments() {
  const segments = data.map((segment) => (
    <Progress.Section
      value={segment.part}
      color={segment.color}
      key={segment.color}
    >
      {segment.part > 10 && <Progress.Label>{segment.part}%</Progress.Label>}
    </Progress.Section>
  ));

  const descriptions = data.map((stat) => (
    <Box
      key={stat.label}
      style={{
        borderBottomColor: stat.color,
        paddingBottom: '0.5rem',
        marginBottom: '0.5rem',
        borderBottomWidth: '2px',
        borderBottomStyle: 'solid',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Text transform="uppercase" size="xs" color="dimmed" weight={700}>
        {stat.label}
      </Text>
      <Box style={{ textAlign: 'right' }}>
        <Text weight={700} style={{ fontSize: '1rem' }}>{stat.count}</Text>
        <Text color={stat.color} weight={700} size="sm">
          {stat.part}%
        </Text>
      </Box>
    </Box>
  ));

  return (
    <Paper withBorder padding="md" radius="md" style={{ maxWidth: '320px', margin: '0 auto' }}>
      <Group position="apart" style={{ marginBottom: '1rem' }}>
        <Group align="flex-end" spacing="xs">
          <Text size="xl" weight={700}>
            $5000
          </Text>
          <Text color="teal" style={{ display: 'flex', alignItems: 'center' }} size="sm" weight={700}>
            <span>18%</span>
            <IconArrowUpRight size="1rem" style={{ marginBottom: '0.25rem' }} stroke={1.5} />
          </Text>
        </Group>
        <IconDeviceAnalytics size="1.4rem" style={{ color: '#38d9a9' }} stroke={1.5} />
      </Group>

      <Text color="dimmed" size="sm" style={{ marginBottom: '1rem' }}>
        Fund allocation vs expenditure used
      </Text>

      <Progress size="lg" radius="md" mt={20} sections={segments} style={{ height: '16px' }} />

      <SimpleGrid cols={1} mt="xl" spacing="sm">
        {descriptions}
      </SimpleGrid>
    </Paper>
  );
}
