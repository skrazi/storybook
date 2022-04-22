import { ComponentMeta, ComponentStory } from "@storybook/react";

import { BookCard } from ".";

export default {
  title: 'Molecules/BookCard',
  component: BookCard
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = () => <BookCard />;

export const Default = Template.bind({});