import { renderHook, waitFor } from "@testing-library/react";
import useFetch from "./useFetch";
import { act } from "react-dom/test-utils";

describe("useFetch functionality", () => {
  it("initial state should be loading when rendered", () => {
    const { result } = renderHook(() => useFetch());
    expect(result.current.state).toBe("loading");
  });

  it("initial data should be null when rendered", () => {
    const { result } = renderHook(() => useFetch());
    expect(result.current.data).toBe(null);
  });
  it("fetchData should be Function to Fetch", () => {
    const { result } = renderHook(() => useFetch());
    expect(result.current.fetchRequest).toBeInstanceOf(Function);
  });

  it("state should be done when fetch request is successfully done", async () => {
    const promise = Promise.resolve({
      json: () => {
        return {};
      },
      ok: true,
    });

    global.fetch = jest.fn(() => promise) as jest.Mock;
    const { result } = renderHook(() => useFetch());
    await act(() => result.current.fetchRequest("users", "GET"));
    await waitFor(() => {
      expect(result.current.state).toBe("done");
      expect(result.current.data).not.toBe(undefined);
    });
  });

  it("state should be error when fetch request is not successful", async () => {
    const promise = Promise.resolve({
      json: () => {
        return {};
      },
      ok: false,
    });

    global.fetch = jest.fn(() => promise) as jest.Mock;
    const { result } = renderHook(() => useFetch());
    await act(() => result.current.fetchRequest("users", "GET"));
    await waitFor(() => {
      expect(result.current.state).toBe("error");
      expect(result.current.data).toBe(null);
    });
  });
});
