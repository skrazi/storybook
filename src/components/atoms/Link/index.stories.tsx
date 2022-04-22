import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Link } from ".";

export default {
  title: 'Atoms/Link',
  component: Link
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args}/>;

export const Default = Template.bind({});
Default.args = {
  text: 'My Library'
}