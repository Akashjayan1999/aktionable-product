import type { Meta, StoryObj } from "@storybook/react";
import SmartModulesSlider from "@/app/(contents)/home/components/slider";

const meta: Meta<typeof SmartModulesSlider> = {
  title: "Components/SmartModulesSlider",
  component: SmartModulesSlider,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SmartModulesSlider>;

export const Default: Story = {
  args: {
    heading: "Our ‘Smart’ Modules",
    modules: [
      {
        title: "AI Chatbot",
        desc: "An intelligent assistant trained on your data that can talk to users naturally.",
      },
      {
        title: "Workflow Optimizer",
        desc: "Streamline your business processes using machine learning predictions.",
      },
      {
        title: "Insight Dashboard",
        desc: "Visualize key metrics and actionable recommendations instantly.",
      },
      {
        title: "Smart Alerts",
        desc: "Get notified before issues occur using anomaly detection.",
      },
    ],
  },
};
