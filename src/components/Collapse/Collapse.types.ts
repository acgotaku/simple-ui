export interface ICollapseProps {
  children: React.ReactNode;
  accordion?: boolean;
  className?: string;
}

export interface IPanelProps {
  children: React.ReactNode;
  title: React.ReactNode;
  name?: string;
  className?: string;
}

export interface CollapseContextProps {
  currentPanel: string[];
  accordion: boolean;
  updatePanel: (panel: string) => void;
}
