import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '..';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'My button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: 'My button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'My button',
};
