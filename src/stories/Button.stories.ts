import type { Meta, StoryObj } from '@storybook/react';
import { Button, buttonVariants } from '@/components/ui/button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Click me',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;


export const Primary: Story = {
  args: {
    variant:'primary',
    children: 'Primary Button',
  },
};

export const BlueSolid: Story = {
  args: {
    variant: 'blueSolid',
    children: 'Submit',
  },
};

export const TealRoundedOutline: Story = {
  args: {
    variant: 'tealRoundedOutline',
    children: 'Rounded Outline',
  },
};



