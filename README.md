<div align="center">
    <img src="./static/img/profile-circle.png" width=140>
    <h1>My portfolio</h1>
    <p>This is my (not yet live) portfolio website.</p>
    <p>Holds collection of my projects, notes, and other content that I am passionate about.</p>
</div>

<br/>

> [!IMPORTANT]
> This repo will be converted to a separated project in future.  
> As of now, this is more of my own need.

## 🛠 Technologies

- [Docusaurus 3](https://docusaurus.io/)
- [React 19](https://react.dev)
- [React-icons](https://react-icons.github.io/)
- Markdown & [mdx](https://mdxjs.com)
- CSS
- GitHub Pages for deployment

## 📁 Project Structure

As this project is built upon docusaurus, it follows it's guidelines.

```
./
├── blog/
│   ├── ...
│   └── My mindset 
├── notes/
│   ├── ...
│   ├── sidebars.js
│   └──  Self written notes, accessiable in /notes
├── src/
│   ├── components/
│   ├── css/
│   ├── pages/
│   │   ├─ ...
│   │   ├── index.js - entry point
│   │   └── holds standalone pages
│   └── ...
├── static/
│   ├── img/
│   ├── ...
│   └── static files.
├── docusaurus.config.js
└── package.json
```

## 📤 Deployment

This site is designed to be deployed on any static site hosting service.

>[!NOTE]
> For GitHub pages, the [workflow](./.github/workflows/deploy.yml) will automatically build & deploy.  
> Only manually enabling pages from settings is needed.  

1. Build the production version:

    ```bash
    npm run build
    ```

2. Deploy using:

    ```bash
    npm run deploy
    ```


## 💻 Development

- Run the local development server:

    ```bash
    npm run start
    ```

- Build the website:

    ```bash
    npm run build
    ```

- Serve the built website locally:

    ```bash
    npm run serve
    ```


## 📄 Credits

- [Docusaurus](https://docusaurus.io/) - The website framework this portfolio is built upon.
- [React](https://react.dev) - UI library for building the interactive components.
- [React Icons](https://react-icons.github.io/) - Icon library used throughout the site.
- Libraries listed in [package.json](./package.json) - Essential dependencies for the project.
- [Hugo Profile](https://hugo-profile.netlify.app/) - Design inspiration.
- [Catppuccin](https://github.com/catppuccin/catppuccin) - Color scheme that inspired the site's palette.
- [Deepseek R1](https://www.deepseek.com/) hosted using [Ollama](https://ollama.com/library/deepseek-r1) - prism.js theme & project card component.
- Countless Internet posts - Filling me with information.