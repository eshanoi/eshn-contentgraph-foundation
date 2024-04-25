import FormCheck from '@/components/common/FormCheck';

const RememberMe = () => {
  return (
    <FormCheck
      labelProps={{ children: 'Remember me' }}
      inputProps={{ id: 'LoginViewModel_RememberMe' }}
    />
  );
};

export default RememberMe;
