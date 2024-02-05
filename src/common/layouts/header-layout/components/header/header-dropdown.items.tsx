import { MenuProps } from "antd";
import { Link } from "react-router-dom";
export const firstItems: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link to="/" rel="noopener noreferrer">
          Не организованный
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to="/" rel="noopener noreferrer">
          Не здоровый
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link to="/" rel="noopener noreferrer">
          Окружение
        </Link>
      ),
    },
];