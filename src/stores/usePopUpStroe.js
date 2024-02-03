import { create } from "zustand";

const usePopUpStore = create(set => ({
  isPopupVisible: false,
  togglePopup: () => set(state => ({ isPopupVisible: !state.isPopupVisible })),
}));

export default usePopUpStore;
