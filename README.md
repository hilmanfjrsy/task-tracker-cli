# task-tracker-cli
A simple Node.js CLI application using Commander.js and managed with Yarn.

🚀 Getting Started
## Prerequisites

1. Node.js (LTS version recommended)
1. Yarn (latest version)

## Installation
Clone the repository and install dependencies:
```shell
git clone https://github.com/hilmanfjrsy/task-tracker-cli
cd task-tracker-cli
yarn install

```

## Make the CLI Executable
Give execution permission to the CLI entry file:

```shell
chmod +x bin/index.js
```

## Link the CLI Globally
Run the following command to link the CLI tool globally:
```shell
yarn link
```
## Usage
Run the CLI tool:
```shell
# Adding a new task
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Updating and deleting tasks
task-cli update 1 "Buy groceries and cook dinner"
task-cli delete 1

# Marking a task as in progress or done
task-cli mark-in-progress 1
task-cli mark-done 1

# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list done
task-cli list todo
task-cli list in-progress
```

## More Information
More info can be found here: https://roadmap.sh/projects/task-tracker