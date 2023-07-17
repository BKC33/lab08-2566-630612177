import { Header } from "../../Components/Header";
import { TaskInput } from "../../Components/TaskInput";
import { Task } from "../../Components/Task";
import { Footer } from "../../Components/Footer";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task */}
        <Task title="Read a book" />
        {/* task */}
        <Task title="Take a shower" />
        {/* task */}
        <Task title="Sleep" />
      </div>
      {/* //footer section */}
      <Footer year="2023 " fullname="Khachen Chaiyo" studentId=" 630612177" />
    </div>
  );
}
