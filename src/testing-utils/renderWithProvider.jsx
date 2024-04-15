//Простая обертка контекстом для рендера компонена

import { render } from "@testing-library/react";

import { GlobalProvider } from "../context/GlobalState";

function renderWithProvider(ui){
  return render(
    <GlobalProvider>
      {ui}
    </GlobalProvider>
  );
}

export { renderWithProvider };