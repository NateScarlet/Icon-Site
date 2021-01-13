### Download Icon

```
POST api/download
```

tabs
tab Description

This endpoint is overloaded to allow downloading a single icon or a package of icons as a zip archive.

/tab
tab Request

There is a universal endpoint for downloading icons or collections of icons allowing for various types `png` (default), `svg`, or `vector-drawable`.

| Property          | Required | Default        | Values                                |
| ------------------|----------|----------------|---------------------------------------|
| id                | `true`   |                |                                       |
| type              | `false`  | `"png"`        | `"png"`, `"jpg"`, `"svg"`, `"vector-drawable"`, `"xaml"` |
| path              | `false`  | `[]`           | `["folder", "subfolder"]`                     |
| width             | `false`  | package.width  |  |
| height            | `false`  | package.height |  |
| padding           | `false`  | `0`            |  |
| paddingTop        | `false`  | `0`            |  |
| paddingRight      | `false`  | `0`            |  |
| paddingBottom     | `false`  | `0`            |  |
| paddingLeft       | `false`  | `0`            |  |
| foreground        | `false`  | `"000000"`     |  |
| foregroundOpacity | `false`  | `1`            |  |
| background        | `false`  | `#FFFFFF`      |  |
| backgroundOpacity | `false`  | `0`            |  |
| radius            | `false`  | `0`            |  |
| borderWidth       | `false`  | `0`            |  |
| borderColor       | `false`  | `000000`       |  |
| borderOpacity     | `false`  | `0`            |  |
| borderCap         | `false`  | `"round"`      |  |
| borderArray       | `false`  | `[1]`          |  |
| margin            | `false`  | `0`            |  |
| marginTop         | `false`  | `0`            |  |
| marginRight       | `false`  | `0`            |  |
| marginBottom      | `false`  | `0`            |  |
| marginLeft        | `false`  | `0`            |  |
| gridColor         | `false`  | `#F0F0F0"`     |  |
| gridOpacity       | `false`  | `0`            |  |
| matteColor        | `false`  | `"FFFFFF"`     |  |
| matteOpacity      | `false`  | `0`            |  |

Request: [DownloadIcon](/contribute/site/api/data#downloadicon) or [DownloadIcon](/contribute/site/api/data#downloadicon)[]

Response: `*.png`, `*.jpg`, `*.svg`, `*.xaml`, `*.xml` or `*.zip`

> Note: If an array is sent the results will be returned in a `zip`. `path` is ignored for object responses.

/tab
tab Response

A single file will be returned or a zip archive.

/tab
/tabs