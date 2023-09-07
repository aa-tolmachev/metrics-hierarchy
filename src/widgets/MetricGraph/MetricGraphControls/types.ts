import { Dispatch, SetStateAction } from "react";
import { GraphDirection } from "../utils/hooks/useGraphDirection";

export type GraphDirectionSetter = Dispatch<SetStateAction<GraphDirection>>;
