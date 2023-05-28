import Aside from "./components/aside";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="flex space-x-16">
      <Aside>{children}</Aside>
    </div>
  );
}
