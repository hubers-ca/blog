import { NavLink } from "@remix-run/react";

type LinkType = {
  href: string;
  label: string;
};

const mathLinks: LinkType[] = [
  { href: "/blog/math/binary_operation", label: "Binary Operation" },
  { href: "/blog/math/group", label: "Groups" },
];

const devLinks: LinkType[] = [];

function classNames(...classes: unknown[]) {
  return classes.filter(Boolean).join(" ");
}

const ListLink = ({ href, label }: LinkType) => (
  <NavLink
    to={href}
    className={({ isActive, isPending }) =>
      classNames(
        "py-1 px-2 pl-4 hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 w-full rounded-lg",
        isActive && "bg-neutral-200 text-neutral-700"
      )
    }
  >
    {label}
  </NavLink>
);

function BlogSidebar() {
  return (
    <nav className="flex flex-col p-2 space-y-1 overflow-y-scroll h-screen sticky left-0 top-0">
      <NavLink
        to="/blog/code"
        className={({ isActive, isPending }) =>
          classNames(
            "py-1 px-2 hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 w-full rounded-lg font-bold text-lg text-black"
            // isActive && "bg-neutral-200 text-neutral-700"
          )
        }
      >
        Code
      </NavLink>
      {devLinks.map(({ href, label }) => (
        <ListLink key={href} href={href} label={label} />
      ))}
      <NavLink
        to="/blog/math"
        className={({ isActive, isPending }) =>
          classNames(
            "py-1 px-2 hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 w-full rounded-lg font-bold text-lg text-black"
            // isActive && "bg-neutral-200 text-neutral-700"
          )
        }
      >
        Mathematics
      </NavLink>
      {mathLinks.map(({ href, label }) => (
        <ListLink key={href} href={href} label={label} />
      ))}
    </nav>
  );
}

export { BlogSidebar };
