import { Link } from '@/shared/components';

const CodeLink = ({ ...props }: React.ComponentProps<typeof Link>) => (
  <Link
    css={{
      position: 'absolute',
      top: '0',
      right: '0',
      width: '$7',
      height: '$7',
      background: 'linear-gradient(45deg, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%), url("/code.jpg") center/cover',
    }}
    href="https://github.dev/mashed-dev/homepage/blob/main/src/pages/index.tsx"
    target="_blank"
    rel="noreferrer"
    {...props}
  />
);

export default CodeLink;
