import FormInput from './FormInput';

export default {
  component: FormInput,
  title: 'FormInput',
};

const Template = (args) => <FormInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
