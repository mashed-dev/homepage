import NextLink from 'next/link';
import { styled } from '@/stitches';

const A = styled('a');

type Props = React.ComponentProps<typeof A>;

const Link = ({ children, href, ...props }: Props) => (
  <NextLink href={href ?? ''} passHref>
    <A {...props}>{children}</A>
  </NextLink>
);

export default Link;
