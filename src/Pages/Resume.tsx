import { useData } from "../Context/DataContext";

export default function Resume() {
  const { data } = useData();
  console.log(data);

  return <div>Resume</div>;
}
