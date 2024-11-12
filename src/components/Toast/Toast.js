import { toast } from "react-toastify"

export const SuccessToast = (message) => toast.success(message, { position: "bottom-right", theme: "colored", autoClose: 2000 });

export const ErrorToast = (message) => toast.error(message, { position: "bottom-right", theme: "colored", autoClose: 3000 });

export const InfoToast = (message) => toast.info(message, { position: "bottom-right", theme: "colored", autoClose: 2000 });