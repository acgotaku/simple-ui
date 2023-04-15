export interface ITagInputProps {
  draggable?: boolean;
  clearable?: boolean;
  separator?: string | string[];
  disabled?: boolean;
  value?: string[];
  className?: string;
  onChange?: (value: string[]) => void;
}

export interface ITagProps {
  children: React.ReactNode;
  disabled?: boolean;
  id?: string;
  draggable?: boolean;
  onClose?: () => void;
  dragStartHandler?: (event: React.DragEvent<HTMLElement>) => void;
  dragEnterHandler?: () => void;
  dragEndHandler?: () => void;
  dragOverHandler?: (event: React.DragEvent<HTMLElement>) => void;
  dropHandler?: (event: React.DragEvent<HTMLElement>) => void;
}

export interface ITagsProps {
  containerRef: React.RefObject<HTMLDivElement>;
  disabled?: boolean;
  draggable?: boolean;
  value?: string[];
  onChange?: (value: string[]) => void;
  removeTag?: (index: number) => void;
}
