import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { RecoilRoot } from 'recoil';
import router from './router';
import pl from 'date-fns/locale/pl';
import { setDefaultOptions } from 'date-fns';

setDefaultOptions({locale: pl});

const root = ReactDOM.createRoot(
  document.getElementById('root')!
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </React.Suspense>
    </RecoilRoot>
  </React.StrictMode>
);