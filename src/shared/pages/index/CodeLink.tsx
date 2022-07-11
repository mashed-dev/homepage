import { Box, Link } from '@/shared/components';

const CodeLink = ({ ...props }: React.ComponentProps<typeof Link>) => (
  <Link
    css={{
      position: 'absolute',
      top: '0',
      right: '0',
      width: '$5',
      height: '$5',
      background: 'linear-gradient(45deg, #000000 50%, rgba(0, 0, 0, 0) 100%), url("/code.jpg") center/cover',
    }}
    href="https://github.dev/mashed-dev/homepage/blob/main/src/pages/index.tsx"
    target="_blank"
    rel="noreferrer"
    {...props}
  >
    <Box
      css={{
        position: 'absolute',
        top: '0',
        right: '0',
        height: '$2',
        width: '$2',
        background: 'linear-gradient(45deg, #ffffff 10%, #000000 50%)',
      }}
    />
  </Link>
);

export default CodeLink;
