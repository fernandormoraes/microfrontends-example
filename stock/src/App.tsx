import { BrowserRouter, Route, Routes } from '@modern-js/runtime/router';
import StockPage from './_StockPage';

export default (props: { basename: string }) => {
  const { basename } = props;

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route index element={StockPage()} />
        <Route path={'path'} element={<div>Stock Route</div>} />
      </Routes>
    </BrowserRouter>
  );
};
