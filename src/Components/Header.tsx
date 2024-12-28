import { useData } from "../Context/DataContext";

export default function Header() {
  const { data } = useData();
  return <div>Header</div>;
}
