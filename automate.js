import path from "path";

import { simpleGit, CleanOptions } from "simple-git";

const filePath = "./automate.js";

simpleGit()
  .add([filePath])
  .commit("[chore] automate updated", { "--date": "2023-02-17" })
  .push();
