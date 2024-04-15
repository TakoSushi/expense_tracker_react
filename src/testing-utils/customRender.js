// Перезапиcь функции render из testing-library
// добавляющая провайдер глобального контекста 


import { render as rtlRender } from "@testing-library/react";

import { GlobalProvider } from "../context/GlobalState";

function render(ui, options){
  return rtlRender(ui, {wrapper: GlobalProvider, ...options})
}

export * from "@testing-library/react";

export { render };