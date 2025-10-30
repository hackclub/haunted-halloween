# 🎃 Haunted Halloween

A spooky, Halloween-themed version of the [Hack Club website](https://hackclub.com) created for the **Haunted** event! This project features custom Halloween theming, decorations, and special effects to celebrate the spookiest time of year.

## 🦇 About Haunted

Haunted is a special event running until November 3rd where participants create Halloween themes or decorations for existing websites. This repository serves as both the event website and a showcase of Halloween web design!

### What You Can Get

- 🎁 Custom Halloween-themed stickers for all participants
- 🍬 Halloween candy grants for 2+ hours of work
- 🏆 Bonus points for auto-enabling themes every October

### Event Rules

1. Must be 18 or under
2. All work must be your own
3. Track your time using Hackatime

Learn more at [/haunted-info.html](/haunted-info.html)

## ✨ Features

- 🎨 Halloween-themed UI with orange, black, purple, and neon green color scheme
- 👻 Spooky animations and hover effects
- 🎃 Custom Halloween components and cards
- 🎊 Konami code Easter egg with Halloween confetti
- 📱 Fully responsive design
- ⚡ Built with Next.js for optimal performance

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hackclub/haunted-halloween.git
cd haunted-halloween
```

2. Install dependencies:
```bash
yarn install
```

3. Run the development server:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the Halloween magic! 🎃

## 📜 Available Scripts

- **`yarn dev`** - Start the development server
- **`yarn build`** - Create a production build
- **`yarn start`** - Run the production server
- **`yarn lint`** - Run ESLint to check code quality
- **`yarn format`** - Format code with Prettier

## 🏗️ Project Structure

```
haunted-halloween/
├── components/          # React components
│   ├── index/          # Homepage components
│   │   └── cards/      # Card components (e.g., Halloween event card)
│   ├── nav.js          # Navigation component
│   ├── footer.js       # Footer component
│   └── ...             # Other reusable components
├── pages/              # Next.js pages
│   ├── index.js        # Homepage
│   ├── _app.js         # App wrapper
│   └── api/            # API routes
├── public/             # Static assets
│   ├── haunted-info.html  # Haunted event information
│   └── ...             # Images, fonts, etc.
├── lib/                # Utility functions
├── next.config.mjs     # Next.js configuration
└── package.json        # Dependencies and scripts
```

## 🛠️ Tech Stack

- **[Next.js](https://nextjs.org/)** - React framework for production
- **[React](https://reactjs.org/)** - UI library
- **[Theme UI](https://theme-ui.com/)** - Styling with design tokens
- **[Emotion](https://emotion.sh/)** - CSS-in-JS styling
- **[@hackclub/theme](https://github.com/hackclub/theme)** - Hack Club design system
- **[MDX](https://mdxjs.com/)** - Markdown with JSX support
- **TypeScript** - Type checking enabled (strict mode off, JavaScript is primary)
- **Million.js** - Performance optimization

## 🎨 Code Style

This project follows the Hack Club code style guidelines:

- Single quotes, no semicolons
- 80 character line width
- camelCase for variables/functions
- PascalCase for components
- Theme UI's `sx` prop for styling
- Functional components with hooks

## 🤝 Contributing

This is a Hack Club project! Contributions are welcome, especially:

- Halloween-themed components and animations
- Performance improvements
- Bug fixes
- Documentation improvements

When contributing, please:
1. Follow the existing code style
2. Test your changes locally
3. Create clear, descriptive commit messages

## 📄 License

**Code**: MIT License - Copyright 2025 The Hack Foundation

**Assets**: Assets may not be re-used or re-distributed. See [LICENSE.md](LICENSE.md) for full details.

## 🎃 Credits

- Created by [Hack Club](https://hackclub.com)
- Original site by Lachlan Campbell
- Halloween theme for the Haunted event
- Built with ❤️ (and a bit of 👻) by the Hack Club community

## 🔗 Links

- [Hack Club Website](https://hackclub.com)
- [Hack Club GitHub](https://github.com/hackclub)
- [Hack Club Slack](https://hackclub.com/slack)

---

**Try the Konami Code** on the site for a spooky surprise! 🎃👻🍬
