# S2 Tech Crime Intelligence architecture

## Platform boundary

`ci.s2tech.co.za` is the S2 Tech Crime Intelligence platform. GodsEye is the platform's geospatial intelligence module, available at `/godseye`.

The portal shell owns S2 navigation and module composition. GodsEye retains its existing full-screen operational interface, rendering behaviour, live layers, keyboard controls, shaders, CCTV, and globe behaviour.

## Planned module routes

| Route | Module |
| --- | --- |
| `/` | Command Centre |
| `/godseye` | Geospatial Intelligence |
| `/incidents` | Incidents |
| `/hotspots` | Hotspots |
| `/vehicles` | Vehicles |
| `/persons` | Persons |
| `/watchlists` | Watchlists |
| `/cases` | Cases |
| `/cameras` | Cameras |
| `/alerts` | Alerts |
| `/intel-reports` | Intelligence Reports |
| `/sources` | Sources |
| `/admin` | Administration |

Only Command Centre and Geospatial Intelligence are functional in the initial portal shell. Other routes use explicit not-enabled states and must not fabricate operational statistics, alerts, incidents, or other data.

## Code boundaries

S2-specific UI and orchestration should preferentially live under `src/s2ci/`. Existing upstream GodsEye code should remain unchanged unless an integration issue makes a focused change unavoidable.
