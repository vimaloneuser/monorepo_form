import TextInput from './TextInput';

export default {
  component: TextInput,
  title: 'TextInput',
};

const Template = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
