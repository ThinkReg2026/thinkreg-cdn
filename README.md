# thinkreg-cdn

## This is still a WIP!

System of record for static resources. Everything lives under
`static/<owner>/<type>/`, where `<owner>` is a unique user id or company/client name and `<type>` is one of the following:

| Folder   | Extensions → Content-Type |
|----------|---------------------------|
| `image/` | png, jpg/jpeg, gif, webp, avif, svg (`image/svg+xml`), ico |
| `text/`  | txt (`text/plain`), md (`text/markdown`), csv (`text/csv`) |
| `html/`  | html, htm (`text/html`) |
| `css/`   | css (`text/css`) |
| `pdf/`   | pdf (`application/pdf`) |
| `js/`    | js, mjs (`text/javascript`), map (`application/json`) |

## TODO - documentation for workflow, automation, and deployment

