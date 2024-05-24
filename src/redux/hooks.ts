// Single source of access
// Use this instead of useSelector, useDispatch, or useStore
// - Error otherwise: "Please use pre-typed versions AppDispatch and AppSelector from `src/redux/hooks.ts` instead."

/* eslint-disable @typescript-eslint/no-restricted-imports */
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "src/redux/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();