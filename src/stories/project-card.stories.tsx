import type { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "@/components/project-card";

const meta: Meta<typeof ProjectCard> = {
  title: "Components/ProjectCard",
  component: ProjectCard,
  tags: ["autodocs"],
  args: {
    name: "ChatBot Engine",
    createdAt: "2025-06-22",
    status: "Not Deployed",
    completed: false,
  },
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const NotDeployed: Story = {};

export const SuccessCompleted: Story = {
  args: {
    status: "Success",
    completed: true,
  },
};

export const SuccessNotCompleted: Story = {
  args: {
    status: "Success",
    completed: false,
  },
};

export const Failed: Story = {
  args: {
    status: "Failed",
    completed: false,
  },
};
