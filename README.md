# Alteum website (alteum.io)

Static website: plain HTML/CSS/JS, no build step. Open `index.html` through any static server, e.g.
`python3 -m http.server 4173` from this folder, then http://localhost:4173/.

**Status:** not yet published to alteum.io. Hosting has not been chosen (GitHub Pages is the likely option).
Do not change DNS, publish, or replace the live domain without Matthew's go-ahead.

## Pages
| Path | Page |
|---|---|
| `/` | Homepage: globe hero, "Fiat and stablecoins" section, Who we serve (`/#audiences`), API, FAQ |
| `/products/send-payments/` | Send payments |
| `/products/receive-payments/` | Receive payments |
| `/products/cross-border-payments/` | Cross-border payments |
| `/products/fiat-stablecoin/` | Fiat ↔ Crypto reference-estimate converter |
| `/products/virtual-account-issuance/` | Virtual accounts demo dashboard |
| `/about/` | About Alteum |
| `/privacy/` | Privacy Policy |
| `/terms/` | Terms of Use |

## Recent changes (Nov 2026)
- Homepage "Fiat and stablecoins" section uses original artwork: `capabilities.css` (coins, layout) and
  `capabilities-globe.js` (dotted globe drawn from our own map data; routes are illustrative).
- Heading font is **Onest** (SIL Open Font License, `fonts/OFL.txt`), self-hosted at `fonts/Onest.woff2`.
  The CSS family name `AlteumReference` is kept, so every page uses it.
- Fixed duplicate arrow on the "Request an Alteum quote" button; each product page has its own meta description.
- The CSS class name `blox-clone` on the homepage/About wrapper is a legacy name; approved styles depend on it.

## Legal pages
- `/privacy/` and `/terms/` are generated from the owner's approved Google Docs ("Eng - Privacy Policy - UpdateOct2026",
  "Eng - AX Terms of Use - October 2026"). Wording must match those docs exactly; update the docs first, then the pages.
- Footer legal name: Alteumx International, S.A.; legal pages are linked from every footer.

## Still open
- Footer says "Fiat ↔ stablecoin" while the page is titled "Fiat ↔ Crypto": pick one.
- Physical phone testing.

## Original project notes (from the ChatGPT handoff; still apply)

ALTEUM WEBSITE — CLAUDE HANDOFF

SOURCE OF TRUTH
This package contains the latest local static website. It has not been published to alteum.io. The user approved the current designs. Continue from these files; do not rebuild from scratch or change the brand direction without a preview and approval.

RUN LOCALLY
Serve the website folder with any static HTTP server. With Python installed, run:
python3 -m http.server 4173 --directory website
Open http://localhost:4173/.
No build or package installation is required. Keep all CSS/JS assets, including assets named "preview": several are used by approved pages. External fonts and the reference-rate feed require internet access.

APPROVED PAGES
/ — homepage, North America-focused animated globe, six illustrative two-way country routes, editorial audience section, shared API section, FAQs, footer.
/products/send-payments/ — approved payment flow, currency selector, methods FAQ.
/products/receive-payments/ — approved collection flow and shared Waltrex API wording.
/products/cross-border-payments/ — the newer approved route selector is now applied to the standard page; independent funding/payout currency choices.
/products/fiat-stablecoin/ — approved side-by-side reference-estimate converter, not an executable quote.
/products/virtual-account-issuance/ — approved unified customer/business treasury dashboard demo.
/about/ — approved simpler About layout: "We connect businesses", compact Alteum/Waltrex business descriptions, then map.

BRANDING AND DESIGN CONSTRAINTS
Ivory background #f5f5f0, navy #142339, blue #051ff9, restrained cyan hover text/underline.
Preserve the approved single-blue Alteum symbol with ALTEUM below it. Waltrex uses the existing official symbol and green wordmark.
Header: Home, Products, Who we serve, About Alteum, API; outlined "Looking for Waltrex" button.
User rejects childish, generic, excessive-card designs, pale blue backgrounds, oversized lettering, repeated sections, and unnecessary redesigns.
Who we serve stays on the homepage at /#audiences; do not introduce a separate industry page.
Always preview substantial new design changes before applying them. Approved work should go into the standard pages, not remain only in a preview file.

CONFIRMED BUSINESS DETAILS
Alteum is the finance side; Waltrex is the wallet infrastructure side. Alteum group is acceptable. Never use AlteumX.
Core fiat: MXN, COP, USD, EUR. Primary stablecoins: USDT, USDC. Other crypto is also supported; use the word "crypto" rather than "cryptocurrencies" in the short support copy.
Payment methods:
MXN: SPEI, CLABE.
COP: Bre-B, linked-account payment keys.
USD: domestic wire, international wire (SWIFT), ACH, RTP, FedNow. User explicitly removed US account/routing-number wording from the payment pages.
EUR: SEPA AND SWIFT, IBAN. Include SWIFT wherever EUR methods are described.
Collections through a personal WhatsApp chat, non-technical platform, and the Waltrex API.
The collections API and Waltrex API are the SAME API. Do not imply a separate Alteum finance API.
Docs: https://waltrex.readme.io/reference/introduction
Waltrex website / Wallet-as-a-Service: https://home.waltrex.io/
Contact: mailto:info@alteum.io. Generic finance contact CTAs now say "Talk to our team". Keep quote-specific request wording where it describes a quote request.
LinkedIn: https://www.linkedin.com/company/alteumholding/home/
Do not add Venezuela, VES, LA, or Panama to the geographic illustration. Do not add a Houston label.

VIRTUAL ACCOUNTS
Every customer has a unique fiat account number for EACH currency, regardless of displayed account name. Customer identification does not require reference codes.
Business treasury is the combined activity view. Customer A/B/C show only that customer's combined fiat/crypto deposits and withdrawals. Currency filters apply to all views. There is no separate All transactions view.
Customer crypto deposit addresses are dedicated, not pooled. Crypto is swept automatically from customer addresses to the business master wallet. Own business deposits go directly to the business wallet, never a self-sweep.
Names: business name by default; customer name available with extended KYC. Accounts can also be held under Alteum's name by arrangement. Do not invent legal guarantees or anonymity claims.
Networks supported: Ethereum, TRON, Solana. User removed the Solana demo detail box only; network support remains. Account details show MXN and COP on the left, Ethereum and TRON on the right.
Do not mention network fees (user explicitly asked to omit them).
All dashboard records, addresses, account identifiers, amounts and withdrawals are illustrative, clearly marked demo. No live financial operations exist here.

HOME GLOBE
Current approved country labels: MXN/MEXICO, COP/COLOMBIA, USD/USA (point located in Miami), EUR/EUROPE (point in Spain).
Six routes: Mexico-USA, Mexico-Colombia, Mexico-Europe, USA-Colombia, USA-Europe, Europe-Colombia.
The user approved the final network after several iterations. Do not revert to a Mexico-only network or add extra city markers without being asked.
Edit market-network.js for markets, coordinates and illustrative routes. app.js renders the globe. home-globe-framing.css keeps it visible.
Changing the map configuration does NOT automatically add supported currencies to product copy, FAQs or converter data. Those require deliberate updates based on confirmed capabilities.

CONVERSION ESTIMATES
Public reference exchange rates are used for illustration; no real Alteum quote is produced. Keep the explicit "Reference estimate only — not an Alteum quote" wording, excluded spread/fees information, unavailable-feed handling and positive-amount validation. User asked to remove the visible Coinbase attribution link. Do not add fake rates or execution controls.

MOBILE VERIFICATION
Responsive browser checks completed at 320, 390 and 430 CSS pixels for all seven standard pages: 21 checks, no page-wide overflow.
Mobile menu is a compact single-column product list on narrow screens. Account filters stack; demo CLABE fits; table scroll guidance and larger touch controls added.
Shared mobile fixes are in mobile-polish.css. Desktop layouts preserved.
Menu navigation, payout selector, independent cross-border selectors, converter direction, business treasury currency filter and transaction details were exercised through browser UI.
Physical iPhone/Android device testing has NOT been performed.

LATEST CHANGES
Outlined Waltrex button approved and applied throughout the site (waltrex-button.css).
Generic finance CTAs standardized to "Talk to our team".
Homepage developer copy now explains that Waltrex API supports collections AND wallets.
These last copy changes were saved in the source; avoid reverting them to older screenshots.

REMAINING WORK
Review the latest contact/API copy in context. Physical phone testing remains.
Obtain the exact legal company name and any required privacy notice and terms from the owner. Do not fabricate legal details or regulatory status.
Publication to alteum.io is still pending. This handoff does not authorize buying hosting, changing DNS, publishing, or replacing the live domain without the user's direction.

IMPLEMENTATION
Buildless HTML/CSS/JS. No framework/build pipeline required.
Some approved assets have "preview" in their filenames. Retain them; excluding all preview-named assets will break the site.
Retired standalone preview HTML pages are omitted from this package to avoid confusing the approved pages.