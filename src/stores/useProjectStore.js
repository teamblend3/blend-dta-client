import { create } from "zustand";

const useProjectStore = create(set => ({
  projectInfo: {
    dbUrl: "",
    dbId: "",
    dbPassword: "",
    dbTableName: "",
    sheetUrl: "",
  },
  errors: {},
  disabledFields: {},
  setProjectInfo: (name, value) =>
    set(state => ({
      projectInfo: { ...state.projectInfo, [name]: value },
    })),
  setError: (name, error) =>
    set(state => ({
      errors: { ...state.errors, [name]: error },
    })),
  setDisabled: (name, isDisabled) =>
    set(state => ({
      disabledFields: { ...state.disabledFields, [name]: isDisabled },
    })),
}));

export default useProjectStore;
