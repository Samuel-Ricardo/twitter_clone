import { IconType } from 'react-icons';

export interface ISidebarItemProps {
  label: string;
  icon: IconType | string;
  href?: string;
  onClick?: () => void | any;
  alert?: boolean;
}
