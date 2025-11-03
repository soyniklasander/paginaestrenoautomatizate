# Automatizate Web

## Descripción
Automatizate Web es una aplicación web escalable construida usando Vue.js para el lado del cliente y NestJS para el lado del servidor. Este proyecto tiene como objetivo proporcionar una plataforma robusta para gestionar varias funcionalidades como autenticación de usuarios, gestión de proyectos y manejo de contactos.

## Project Structure
The project is organized into two main directories: `client` and `server`.

### Client
- **src**: Contains the source code for the Vue application.
  - **assets**: Static assets like images and fonts.
  - **components**: Reusable Vue components.
    - **common**: Commonly used components.
    - **layout**: Layout components for page structure.
    - **sections**: Section-specific components.
  - **pages**: Vue components representing different pages.
  - **router**: Routing configuration for the application.
  - **store**: Vuex store configuration for state management.
  - **styles**: Global styles and CSS files.
  - **utils**: Utility functions and helpers.
  - **App.vue**: Root component of the Vue application.
  - **main.ts**: Entry point of the Vue application.

- **public**: Public assets served directly.

- **package.json**: Configuration file for npm, listing dependencies and scripts.

- **tsconfig.json**: TypeScript configuration file.

- **vite.config.ts**: Configuration for Vite, the build tool.

### Server
- **src**: Contains the source code for the NestJS application.
  - **config**: Configuration files for the application.
  - **modules**: Feature modules organized by functionality.
    - **auth**: Authentication-related functionality.
    - **users**: User management functionality.
    - **projects**: Project management functionality.
    - **contact**: Contact-related functionality.
  - **shared**: Shared resources like interfaces and constants.
  - **app.module.ts**: Root module of the NestJS application.
  - **main.ts**: Entry point of the NestJS application.

- **test**: Test files for the server-side application.

- **package.json**: Configuration file for npm, listing dependencies and scripts.

- **tsconfig.json**: TypeScript configuration file.

- **nest-cli.json**: Configuration for the NestJS CLI.

## Getting Started
To get started with the project, clone the repository and install the necessary dependencies for both the client and server.

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the client directory and install dependencies:
   ```
   cd client
   npm install
   ```
3. Navigate to the server directory and install dependencies:
   ```
   cd ../server
   npm install
   ```

### Running the Application
To run the application, you can use Docker Compose:
```
docker-compose up
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.
>>>>>>> ba6c905 (feat: Actualización inicial del proyecto)
