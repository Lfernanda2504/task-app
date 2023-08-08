"use client";
import { createContext, useContext } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must used within a provider");
  return context;
};
export const TaskProvider = ({ children }) => {
  //componente que resibe todas las paginas
  //todas las paginas tiene acceso a las tareas
  const tasks = [
  {
    id: 1,
    title: "mi primer tarea",
    description: "actualizar proyecto"
  },
  {
    id: 2,
    title: "segunda  tarea",
    description: "modificar proyecto"
  },
  {
    id: 3,
    title: "tercera tarea",
    description: "subir cambios proyecto"
  }
];

  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
};
