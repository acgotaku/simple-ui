export interface IModalProps {
  children: React.ReactNode;
  visible: boolean;
  closable?: boolean;
  onClose?: (visible: boolean) => void;
  title?: string;
}
