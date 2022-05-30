import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

type LayoutPage = NextPage & { layout?: (page: ReactElement) => ReactNode };

export default LayoutPage;
