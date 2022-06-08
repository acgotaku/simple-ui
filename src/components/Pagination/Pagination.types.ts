export interface IPaginationProps {
  currentPage: number;
  total: number;
  onChange: (page: number) => void;
  className?: string;
}
