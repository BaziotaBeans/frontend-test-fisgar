import "@testing-library/jest-dom";
import { render, screen, RenderResult } from "@testing-library/react";
import Page from "../app/page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactNode } from "react";
import { useMediaQuery } from "@mui/material";

// Mock para simular o comportamento do useMediaQuery e forçar modo mobile
jest.mock("@mui/material/useMediaQuery", () => ({
  __esModule: true,
  default: jest.fn(() => true), // Retorna sempre "true" para simular um dispositivo móvel
}));

const renderWithProviders = (ui: ReactNode): RenderResult => {
  const queryClient = new QueryClient();
  const theme = createTheme();

  return render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </QueryClientProvider>,
  );
};

describe("Home Page", () => {
  it("1. Renderiza o cabeçalho", () => {
    renderWithProviders(<Page />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("2. Renderiza os filtros de pesquisa", () => {
    renderWithProviders(<Page />);
    expect(screen.getAllByText("Preço mínimo").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Preço máximo").length).toBeGreaterThan(0);
  });

  it("3. deve mostrar o botão de lista na versão mobile", () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true); // simula mobile
    renderWithProviders(<Page />);

    const listButton = screen.getByRole("button");
    expect(listButton).toBeInTheDocument();
  });

  it("4. Exibe o estado de carregamento quando as propriedades estão sendo carregadas", () => {
    renderWithProviders(<Page />);
    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });
});
