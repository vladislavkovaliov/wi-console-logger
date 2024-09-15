# Console Logger

Highlighting console native logging.

Simple way to disable logging in production mode.

## Example

```tsx
import { Logger } from "wi-console-logger";

/**
 * level = error - shows only error message.
 * level = warn - shows error and warn messages.
 * level = log - by default, shows all messages.
 *
 * transform - is optional
 */

const logger = new Logger({ level: "log", transform: {
  colors: {
    log: { background: "white", font: "black" },
    warn: { background: "white", font: "black" }
    error: { background: "white", font: "black" }
  }}
});

logger.log("log");
logger.warn("warn");
logger.error("error");
```
