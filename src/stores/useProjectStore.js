import { create } from "zustand";

const useProjectStore = create(set => ({
  projectInfo: {
    dbUrl: "",
    dbId: "",
    dbPassword: "",
    dbTableName: "",
    sheetUrl: "",
  },
  setProjectInfo: info =>
    set(state => ({
      projectInfo: {
        ...state.projectInfo,
        [info.name]: info.value,
      },
    })),
}));

export default useProjectStore;
