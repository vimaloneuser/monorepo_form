import Label from './Label';

export default {
  component: Label,
  title: 'Label',
};

const Template = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
