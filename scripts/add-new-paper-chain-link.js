#!/usr/bin/env node

const { readFile, writeFile } = require("fs/promises");
const path = require("path");

const { signal, abort } = new AbortController();

async function readHistory(filename) {
  try {
    const file = await readFile(filename, { signal, encoding: "utf-8" });
    return JSON.parse(file);
  } catch (e) {
    console.error(e);
  }
}

/**
 * Creates a standard new entry with timestamp of "now"
 */
function createNewEntry() {
  return {
    content: "STUB",
    timestamp: Date.now(),
    style: {
      backgroundColor: "black",
      color: "white",
    },
  };
}

/**
 * Includes the new entry inside the read file
 */
function addNewEntry(file, newEntry) {
  return {
    ...file,
    list: [newEntry, ...file.list],
  };
}

async function writeUpdatedFile(filename, content) {
  try {
    const stringified = JSON.stringify(content, null, 2);
    await writeFile(filename, stringified);
    console.log(`Added new stub to ${filename}`);
  } catch (e) {
    console.error(e);
  }
}

/**
 * Main function that handles the entire operation
 */
async function main() {
  const dataPath = "../assets/paper-chain";
  const filename = path.join(__dirname, dataPath, "data.json");
  const file = await readHistory(filename);
  const newEntry = createNewEntry();
  const updated = addNewEntry(file, newEntry);
  await writeUpdatedFile(filename, updated);
}

process.on("SIGTERM", () => {
  console.log("Terminating");
  abort();
});

main();
