export interface IAvatarProps {
  image?: string | null;
  userId?: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
  large?: boolean;
  bordered?: boolean;
}
