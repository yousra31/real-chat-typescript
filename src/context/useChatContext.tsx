import { createContext } from "react";
import { roomContent } from "../components/Room";

export const useChatContext = createContext<roomContent>({} as roomContent);

