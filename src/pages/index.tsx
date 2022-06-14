import { styled } from '@/stitches';
import { CodeLink } from '@/shared/pages/index';

const Wrapper = styled('div', {
  display: 'flex',
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
    Test
  </Wrapper>
);

export default Home;
