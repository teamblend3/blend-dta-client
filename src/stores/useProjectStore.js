import { create } from "zustand";

const useProjectStore = create(set => ({
  projectInfo: {
    dbUrl: { value: "", error: "", disabled: false },
    dbId: { value: "", error: "", disabled: false },
    dbPassword: { value: "", error: "", disabled: false },
    dbTableName: { value: "", error: "", disabled: false },
    sheetUrl: { value: "", error: "", disabled: false },
  },
  setInfoValue: info =>
    set(state => ({
      projectInfo: {
        ...state.projectInfo,
        [info.name]: {
          ...state.projectInfo[info.name],
          value: info.value,
        },
      },
    })),
  setInfoError: info =>
    set(state => ({
      projectInfo: {
        ...state.projectInfo,
        [info.name]: {
          ...state.projectInfo[info.name],
          error: info.error,
        },
      },
    })),
  setInfoDisabled: info =>
    set(state => ({
      projectInfo: {
        ...state.projectInfo,
        [info.name]: {
          ...state.projectInfo[info.name],
          disabled: info.disabled,
        },
      },
    })),
}));

export default useProjectStore;
