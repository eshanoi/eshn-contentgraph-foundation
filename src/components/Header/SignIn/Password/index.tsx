import TextFieldWithContainer from '@/components/common/TextField/TextFieldWithContainer';

const Password = () => {
  return (
    <TextFieldWithContainer
      labelProps={{
        children: 'Password',
      }}
      inputProps={{
        id: 'LoginViewModel_Password',
        type: 'password',
      }}
    />
  );
};

export default Password;
