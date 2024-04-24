import TextFieldWithContainer from '@/components/common/TextField/TextFieldWithContainer';

const Email = () => {
  return (
    <TextFieldWithContainer
      labelProps={{
        children: 'Email Address',
      }}
      inputProps={{
        id: 'LoginViewModel_Email',
        type: 'email',
      }}
    />
  );
};

export default Email;
