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
  index: number;
  disabled?: boolean;
  draggable?: boolean;
  onClose?: () => void;
  dragStartHandler?: (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => void;
  dragEnterHandler?: (index: number) => void;
  dragEndHandler?: () => void;
}

export interface ITagsProps {
  disabled?: boolean;
  draggable?: boolean;
  value?: string[];
  onChange?: (value: string[]) => void;
  removeTag?: (index: number) => void;
}
