import Category from "./components/Category";
import Chart from "./components/Chart";
import Date from "./components/Date";
import Graph from "./components/Graph";
import Nav from "./components/Nav";


export default function Home() {
  return (
   <div className="space-y-[30px] overflow-x-hidden">
      <Nav></Nav>
      <Date></Date>
      <Category></Category>
      <Graph></Graph>
      <Chart></Chart>
   </div>
  );
}
