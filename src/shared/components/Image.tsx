import { Assign } from 'utility-types';
import NextImage from 'next/image';

type Props = Assign<
  React.ComponentProps<typeof NextImage>,
  {
    src?: string;
  }
>;

const Link = ({ src, ...props }: Props) => <NextImage src={src ?? ''} {...props} />;

export default Link;
