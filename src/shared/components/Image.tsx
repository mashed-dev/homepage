import NextImage from 'next/image';

type Props = React.ComponentProps<typeof NextImage>;

const Link = ({ ...props }: Props) => <NextImage {...props} />;

export default Link;
