import fs from "fs";

const filePath = "data.json";
export function readJSONFile() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]");
  }
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function updateJSONFile(newData) {
  fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));
}

export function addOrUpdateRecord(newRecord) {
  let data = readJSONFile();

  const index = data.findIndex((item) => item.id === newRecord.id);
  if (index !== -1) {
    data[index] = { ...data[index], ...newRecord };
  } else {
    data.push(newRecord);
  }

  updateJSONFile(data);
}

export function deleteRecord(id) {
  let data = readJSONFile();
  const newData = data.filter((item) => item.id !== id);

  updateJSONFile(newData);
}