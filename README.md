# Parr-Desi 🦜

A travel booking website I built for group trips across India and internationally. The idea behind it is simple — solo travelers who don't want to travel alone can join curated group trips, meet strangers, and leave as friends.

---

## What I Built

Parr-Desi is a full frontend travel platform with the following pages and features:

### Home Page
- Full-screen hero with the tagline *"Travel with Strangers. Leave as Family."*
- A scrolling ticker at the top showing all upcoming trip departures
- Popular Trips section showcasing featured packages with images, pricing, and a "View Details" link
- Traveler Stories section with real-looking reviews from past trip members
- Newsletter signup CTA at the bottom

### Trips & Trip Detail Pages
- Individual trip pages with a hero banner, trip overview, and a day-by-day itinerary (collapsible accordion)
- Inclusions and exclusions clearly listed
- Trip highlights shown as pill tags (e.g. Paragliding, Trekking, Stargazing, Mountain bonfire)
- FAQs section
- Sticky sidebar with:
  - Price per person (e.g. ₹11,999)
  - An inquiry form (name, email, phone, message)
  - A live **Next Departure Countdown** timer

### AI Chatbot — Parr-Desi AI
- Floating chat button accessible on every page
- Opens a full chat panel with the **Parr-Desi AI** travel buddy
- Greets users and offers quick-reply suggestion chips:
  - *"What trips are under ₹15,000?"*
  - *"Tell me about Bali trip"*
  - *"Is it safe for solo travelers?"*
  - *"How do I book a trip?"*
- Free-text input so users can ask anything about trips, prices, or logistics
- Powered by the **Claude API (Anthropic)** — the bot has context about all trips on the platform and can answer questions conversationally

---

## Trips on the Platform

| Trip | Destination | Duration | Starting Price |
|------|-------------|----------|----------------|
| Manali Mountain Escape | Manali, India | 5 Days / 4 Nights | ₹11,999 |
| Rajasthan Royal Trail | Rajasthan, India | 6 Days / 5 Nights | ₹14,999 |
| Bali Tropical Dream | Bali, Indonesia | 6 Days / 5 Nights | ₹34,999 |
| Kerala Backwater Bliss | Kerala, India | — | — |
| Goa Beach Vibes | Goa, India | — | — |

---

## Tech Stack

- **Frontend:** React / Next.js
- **Styling:** Tailwind CSS
- **AI Chatbot:** Claude API (Anthropic)
- Built with the help of AI-assisted development tools

---

## Screenshots

| | |
|---|---|
| ![Hero](./screenshots/hero.png) | ![Trips](./screenshots/trips.png) |
| ![Detail](./screenshots/detail.png) | ![Reviews](./screenshots/reviews.png) |
| ![Chatbot](./screenshots/chatbot.png) | |

---

---

## Why I Built This

I wanted to build something that felt like a real product — not just a tutorial clone. Parr-Desi is inspired by the growing trend of social travel in India, where platforms bring together solo travelers for group adventures. The goal was to design and ship a polished, full-featured travel site with a working AI assistant, realistic trip data, and a clean UI.
