const BASE_BUTTON_STYLE =
  "flex justify-center items-center gap-2 font-medium px-6 py-2.5 text-center rounded-md focus:ring-4 focus:outline-none";

const TRANSFORM_STYLE =
  "hover:-translate-y-0.5 hover:shadow-xl transform transition-transform ease-in-out duration-150";

const DISABLED_STYLE =
  "disabled:bg-primary-700 disabled:cursor-not-allowed disabled:hover:-translate-y-0 disabled:hover:bg-primary-400 disabled:hover:shadow-none";

const BG_PRIMARY = "bg-primary-400 hover:bg-primary-300";

export const DEFAULT_BUTTON_STYLE = `${BASE_BUTTON_STYLE} ${BG_PRIMARY} text-text-950 w-full sm:w-auto text-sm ${TRANSFORM_STYLE} ${DISABLED_STYLE}`;

export const CLOSE_MODAL_BUTTON_STYLE = `${BASE_BUTTON_STYLE} text-secondary-600 ms-3 bg-secondary-200 hover:bg-secondary-400 hover:text-secondary-700 focus:ring-secondary-600 border border-secondary-400 focus:z-10 rounded-lg`;

export const CLOSE_MODAL_HEADER_BUTTON_STYLE =
  "text-text-400 bg-transparent hover:bg-secondary-200 hover:text-text-900 rounded-lg text-md w-8 h-8 ms-auto inline-flex justify-center items-center";

export const SYNCHRONIZE_BUTTON_STYLE = `${BASE_BUTTON_STYLE} bg-secondary-400 hover:bg-secondary-300 text-text-950 font-bold text-base w-full sm:w-auto ${TRANSFORM_STYLE}`;

export const USER_PROFILE_SAVE_BUTTON_STYLE = `${BASE_BUTTON_STYLE} text-base font-bold uppercase border-2 border-primary-800 text-primary-600 w-20 h-10 hover:bg-primary-600 hover:text-primary-50`;

export const GOOGLE_LOGIN_BUTTON_STYLE = `${BASE_BUTTON_STYLE} ${BG_PRIMARY} focus:ring-primary font-bold text-xl w-full sm:w-auto ${TRANSFORM_STYLE}`;
