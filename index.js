import fs from "fs";
import { createRequire } from "module";
import stack from "callsite";

/**
 * @summary import the contents of another file as a string
 * @param {String} specifier A valid import specifier, such as
 *   a relative path or a path within a node_modules package
 * @param {String} [encoding="utf8"] File encoding
 * @return {String} The file contents
 */
export default function importAsString(specifier, encoding = "utf8") {
  const caller = stack()[1];
  const callerFileName = caller.getFileName();
  const require = createRequire(callerFileName);

  return fs.readFileSync(require.resolve(specifier), { encoding });
}
