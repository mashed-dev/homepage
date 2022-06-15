import { Image } from '@/shared/components';

const Logo = ({ ...props }: React.ComponentProps<typeof Image>) => (
  <Image src="/logo.png" width={512} height={512} {...props} />
);

export default Logo;
