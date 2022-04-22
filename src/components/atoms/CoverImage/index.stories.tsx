import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CoverImage } from ".";

export default {
  title: 'Atoms/CoverImage',
  component: CoverImage
} as ComponentMeta<typeof CoverImage>;

const Template: ComponentStory<typeof CoverImage> = (args) => <CoverImage {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: '../../../../public/2.svg'
}