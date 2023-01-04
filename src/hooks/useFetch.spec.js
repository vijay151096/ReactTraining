import { renderHook } from "@testing-library/react";
import useFetch from "./useFetch";

describe("useFetch functionality", () => {
  const promise = Promise.resolve({
    json: () => {
      return response;
    },
    ok: true,
  });

  global.fetch = jest.fn(() => promise);

  it("initial state should be loading when rendered", () => {
    const { result } = renderHook(() => useFetch());
    expect(result.current.state).toBe("loading");
  });

  it("initial data should be undefined when rendered", () => {
    const { result } = renderHook(() => useFetch());
    expect(result.current.data).toBe(undefined);
  });

  it.skip("state should be done when fetch request is successfully done", async () => {
    const { result } = renderHook(() => useFetch());
    await result.current.fetchRequest("users", "GET");
    expect(result.current.state).toBe("done");
  });
});
