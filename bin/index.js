#! /usr/bin/env node
import { program } from "commander";
import { addOrUpdateRecord, deleteRecord, readJSONFile } from "./utils.js";

const cmd = program.version("1.0.0");
const tasks = readJSONFile();

cmd
  .command("add <description>")
  .action((description) => {
    const id = tasks.length + 1;
    addOrUpdateRecord({
      id,
      description: description,
      status: "todo",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log(`Task added successfully (ID: ${id})`);
  });

cmd
  .command("update <id> <description>")
  .action((id, description) => {
    addOrUpdateRecord({
      id: Number(id),
      description: description,
      updatedAt: new Date()
    });
  });

cmd
  .command("delete <id>")
  .action((id) => {
    deleteRecord(Number(id));
  });

cmd
  .command("mark-in-progress <id>")
  .action((id) => {
    addOrUpdateRecord({
      id: Number(id),
      status: "in-progress",
      updatedAt: new Date()
    });
  });

cmd
  .command("mark-done <id>")
  .action((id) => {
    addOrUpdateRecord({
      id: Number(id),
      status: "done",
      updatedAt: new Date()
    });
  });

cmd
  .command("list [s]")
  .action((status) => {
    if (status) {
      const filteredTasks = tasks.filter((task) => task.status === status);
      console.log(filteredTasks);
      return
    }
    console.log(tasks);
  });
program.parse(process.argv);