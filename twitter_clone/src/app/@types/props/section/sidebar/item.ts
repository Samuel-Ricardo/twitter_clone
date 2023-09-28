import { IconType } from 'react-icons';

export interface ISidebarItemProps {
  label: string;
  icons: IconType | string;
  href?: string;
  onClick?: () => void;
  alert?: boolean;
}
