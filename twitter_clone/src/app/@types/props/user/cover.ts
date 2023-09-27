export interface ICoverProps {
  avatar?: string | null;
  cover?: string | null;
  userId: string;
  onAvatarClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
}
