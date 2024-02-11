import Link from "next/link";
// ...omitted for brevity
// components/breadcrumbs/Breadcrumbs.ts
import { ReactNode } from "react";
// defining the Props
export type CrumbItem = {
  label: ReactNode; // e.g., Python
  path: string; // e.g., /development/programming-languages/python
};
export type BreadcrumbsProps = {
  items: CrumbItem[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="h-[5vh] flex gap-x-2 items-center font-semibold  px-4 text-sm py-2 bg-[#302E2E] border-b border-maingreen ">
      {items.map((crumb, i) => {
        const isLastItem = i === items.length - 1;
        if (!isLastItem) {
          return (
            <>
              <img src="../../logo/titlogo.svg" className="h-7 w-7" alt="" />
              <Link
                href={crumb.path}
                key={i}
                className="text-indigo-500 hover:text-indigo-400 hover:underline"
              >
                <span className="text-maingreen font-semibold cursor-pointer">
                  {" "}
                  {crumb.label}
                </span>
              </Link>
              {/* separator */}
              <span> / </span>
            </>
          );
        } else {
          return crumb.label;
        }
      })}
    </div>
  );
};
export default Breadcrumbs;
