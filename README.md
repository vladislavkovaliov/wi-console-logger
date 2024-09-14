# Console Logger

Highlighting console native logging.

## Example

```tsx
import { Logger } from "wi-console-logger";

const logger = new Logger({ level: "warn" });

logger.log("log");
logger.warn("warn");
logger.error("error");
```
