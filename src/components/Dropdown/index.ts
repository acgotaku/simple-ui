import {
  Dropdown as InternalDropdown,
  DropdownMenu,
  DropdownItem
} from './Dropdown';

type InternalDropdownType = typeof InternalDropdown;

interface DropdownInterface extends InternalDropdownType {
  Menu: typeof DropdownMenu;
  Item: typeof DropdownItem;
}

const Dropdown = InternalDropdown as DropdownInterface;

Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;

export default Dropdown;
