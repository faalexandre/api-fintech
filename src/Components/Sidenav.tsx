import { useData } from "../Context/DataContext";

export default function Sidenav() {
  const { data } = useData();
  return <div>Sidenav</div>;
}
