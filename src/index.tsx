import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './App';

const mutateCatcher = {
  set() {
    throw new Error('Нельзя мутировать существующие объекты');
  },
};

const data = [
  new Proxy({ id: 1, name: 'React', isChecked: true }, mutateCatcher),
  new Proxy({ id: 2, name: 'Vue', isChecked: true }, mutateCatcher),
  new Proxy({ id: 3, name: 'Angular', isChecked: true }, mutateCatcher),
];

const container = document.getElementById('root');

container &&
  createRoot(container).render(
    <StrictMode>
      <App data={data} />
    </StrictMode>,
  );
