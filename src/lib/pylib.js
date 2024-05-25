import { loadPyodide } from "pyodide";
import pylibString from './pylib.py?raw';

async function loadPylibInternal() {
    let pyodide = await loadPyodide();
    // await pyodide.loadPackage("https://cdn.jsdelivr.net/pyodide/v0.25.0/full/packaging-23.1-py3-none-any.whl");
    // await pyodide.loadPackage("https://cdn.jsdelivr.net/pyodide/v0.25.0/full/micropip-0.5.0-py3-none-any.whl");
    await pyodide.loadPackage("https://cdn.jsdelivr.net/pyodide/v0.25.1/full/numpy-1.26.4-cp311-cp311-emscripten_3_1_46_wasm32.whl");
    // const micropip = pyodide.pyimport("micropip");
    // await micropip.install("numpy");
    await pyodide.FS.writeFile("pylib.py", pylibString, { encoding: "utf8" });
    // Pyimport pylib.py
    return pyodide.pyimport("pylib")
}

// Export a memoized function to avoid loading the module multiple. Only call promise during first call.
let momoizedPylibPromise = null;

export const loadPylib = (() => {
    return () => {
        if (momoizedPylibPromise === null) {
            momoizedPylibPromise = loadPylibInternal();
        }
        return momoizedPylibPromise;
    };
})();
