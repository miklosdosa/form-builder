import { renderHook } from "@testing-library/react";
import { useDialog} from "./hooks";
import { DialogContext } from "./context";

describe("useDialog", () => {
  /* it("should return default context values when no provider is used", () => {
    const { result } = renderHook(() => useDialog());

    expect(typeof result.current.confirm).toBe("function");
    expect(typeof result.current.terminate).toBe("function");

    // Tesztelhető az alap confirm dummy viselkedése is:
    return expect(
      result.current.confirm({ title: "Hello", closeButton: "OK" })
    ).resolves.toBeUndefined();
  }); */

  it("should return provided context values when used with Provider", () => {
    const mockConfirm = vi.fn().mockResolvedValue(undefined);
    const mockTerminate = vi.fn();

    const wrapper = ({ children }: any) => (
      <DialogContext.Provider
        value={{ open: mockConfirm, terminate: mockTerminate }}
      >
        {children}
      </DialogContext.Provider>
    );

    const { result } = renderHook(() => useDialog(), { wrapper });

    expect(result.current.confirm).toBe(mockConfirm);
    expect(result.current.terminate).toBe(mockTerminate);
  });
});
