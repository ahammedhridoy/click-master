import path from "path";

import { simpleGit, CleanOptions } from "simple-git";

const filePath = "./automate.js";

simpleGit()
  .add([filePath])
  .commit("[chore] automate", { "--date": "2023-12-16" })
  .push();
