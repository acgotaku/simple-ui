export interface ITabsProps {
  children: React.ReactNode;
  activeTab?: string;
  className?: string;
}

export interface ITabPaneProps {
  children: React.ReactNode;
  label: React.ReactNode;
  name: string;
  disabled?: boolean;
  className?: string;
}
