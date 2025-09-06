import AppLayout from '@/layouts/appLayout/AppLayout';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router';
import { routerConfig } from './config';
import TableConfig from '@/pages/tableConfig/TableConfig';
import TableData from '@/pages/tableData/TableData';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path={routerConfig.home.path} element={<TableConfig />} />
      <Route path={routerConfig.table.path} element={<TableData />} />

      <Route path='*' element={<>404</>} />
    </Route>
  ),
  {
    basename: '/',
  }
);
