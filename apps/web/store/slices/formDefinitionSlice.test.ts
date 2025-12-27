import { formDefinitionSlice } from "./formDefinitionSlice";
import { StoreApi } from "zustand";

describe("formDefinitionSlice", () => {
  it("should add field", () => {
    let state: any = {
      fields: [],
    };

    const mockSet = (fn: any) => {
      state = { ...state, ...fn(state) };
    };

    const mockGet = () => state;

    const mockStore = {
      setState: mockSet,
      getState: mockGet,
    } as unknown as StoreApi<any>;

    const slice = formDefinitionSlice(mockSet, mockGet, mockStore);

    expect(slice.fields).toStrictEqual([]);

    slice.addField({
      definitionType: "TextField",
      type: "text",
      id: "1",
      name: "name",
    });

    expect(state.fields).toStrictEqual([
      { definitionType: "TextField", type: "text", id: "1", name: "name" },
    ]);
  });

  it("should delete field", () => {
    let state: any = {
      fields: [
        { definitionType: "TextField", type: "text", id: "1", name: "name" },
      ],
    };

    const mockSet = (fn: any) => {
      state = { ...state, ...fn(state) };
    };

    const mockGet = () => state;

    const mockStore = {
      setState: mockSet,
      getState: mockGet,
    } as unknown as StoreApi<any>;

    const slice = formDefinitionSlice(mockSet, mockGet, mockStore);

    expect(slice.fields).toStrictEqual([]);

    slice.deleteField({ id: "1" });

    expect(state.fields).toStrictEqual([]);
  });

  it("should update field", () => {
    let state: any = {
      fields: [
        { definitionType: "TextField", type: "text", id: "1", name: "name" },
      ],
    };

    const mockSet = (fn: any) => {
      console.log(fn.fields);
      state = { ...state, fields: fn.fields };
    };

    const mockGet = () => state;

    const mockStore = {
      setState: mockSet,
      getState: mockGet,
    } as unknown as StoreApi<any>;

    const slice = formDefinitionSlice(mockSet, mockGet, mockStore);

    expect(slice.fields).toStrictEqual([]);

    slice.updateField({ currentId: "1", name: "updatedName" });

    expect(state.fields).toStrictEqual([
      {
        currentId: "1",
        definitionType: "TextField",
        type: "text",
        id: "1",
        name: "updatedName",
      },
    ]);
  });
});
