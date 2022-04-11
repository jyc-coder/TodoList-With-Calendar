import { Typography } from "@mui/material";
import React from "react";
import { useTodoState } from "../TodoContext";

const TodoHead = ({ date }) => {
  const todos = useTodoState();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const selectedDateData = todos.filter(
    (todos) => todos.day === day && todos.month === month
  );
  const undoneTasks = selectedDateData.filter((todo) => !todo.done);
  /* console.log({date}) */
  const dateString = date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = date.toLocaleDateString("ko-KR", {
    weekday: "long",
  });
  return (
    <div>
      <Typography variant="h4">{dateString}</Typography>
      <Typography variant="h5">{dayName}</Typography>
      <Typography variant="h6">남은 일 갯수 {undoneTasks.length}개</Typography>
    </div>
  );
};

export default TodoHead;
