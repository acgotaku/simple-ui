export type DrawerPosition = 'top' | 'bottom' | 'left' | 'right';

export interface IDrawerProps {
  children: React.ReactNode;
  visible: boolean;
  onClose?: (visible: boolean) => void;
  position?: DrawerPosition;
}
