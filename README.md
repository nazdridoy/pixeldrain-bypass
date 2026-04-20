# Pixeldrain Bypass

Userscript that automatically opens PixelDrain file downloads via a faster mirror (`cdn.pixeldrain.eu.cc`) in a new tab.

[![Install](https://img.shields.io/badge/Install-Pixeldrain%20Bypass-brightgreen?style=for-the-badge)](https://greasyfork.org/en/scripts/532142-pixeldrain-bypass)

## How It Works

When you open a `pixeldrain.com/u/*` link, the script extracts the file ID and immediately opens `cdn.pixeldrain.eu.cc/<ID>?download` in a new tab.

## Installation

1. Install a userscript manager — [Tampermonkey](https://www.tampermonkey.net/), [Violentmonkey](https://violentmonkey.github.io/), or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
2. [Install from Greasy Fork](https://greasyfork.org/en/scripts/532142-pixeldrain-bypass) or paste [`PixelDrainBypass.js`](https://github.com/nazdridoy/pixeldrain-bypass/blob/main/PixelDrainBypass.js) into a new script

> Grant the `GM_openInTab` permission when prompted.

## Usage

Open any `https://pixeldrain.com/u/*` link — the download starts automatically in a new tab.

## License

MIT — see [LICENSE](LICENSE)

## Credits

[nazdridoy](https://github.com/nazdridoy)

## Support

- [Open an issue](https://github.com/nazdridoy/pixeldrain-bypass/issues)
- [Submit a pull request](https://github.com/nazdridoy/pixeldrain-bypass/pulls)
