import type { Meta, StoryObj } from '@storybook/react';
import { SlideCard } from '@/app/(contents)/home/components/slider-card';

const meta: Meta<typeof SlideCard> = {
  title: 'Components/SlideCard',
  component: SlideCard,
  tags: ['autodocs'],
  args: {
    title: 'Effortless Integration',
    description: 'Quickly plug into your ecosystem with minimal configuration and maximum flexibility.',
    href: '#',
  },
};

export default meta;
type Story = StoryObj<typeof SlideCard>;

export const Default: Story = {};


export const WithExternalLink: Story = {
  args: {
    title: 'Explore the Docs',
    description: 'Learn how to integrate and scale your solution efficiently with our robust documentation.',
    href: 'https://example.com/docs',
  },
};
