import { styled } from '@/stitches';
import { Flex } from '@/shared/components';
import { CodeLink, Logo } from '@/shared/pages/index';

const Wrapper = styled(Flex, {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: '0 $7',
  backgroundColor: '#000000',
  color: '#ffffff',
});

const Home = () => (
  <Wrapper>
    <CodeLink />
    <Logo />
  </Wrapper>
);

export default Home;
