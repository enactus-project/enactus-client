import App from '@/App';
import { HeaderLayout } from '@/common/layouts/header-layout';
import { RouteObject } from 'react-router-dom';


export const routes: RouteObject[] = [

    {
        children: [
            {
            element: <App />,
            path: '/',
            },
        ],
        element: <HeaderLayout />,
        path: '/',
    },
  
];
