# NodeJS-Skeleton With Firebase
This is a Node.js project skeleton for building RESTful APIs using TypeScript with Firebase integration. It contains some essential files and folders that can be used as a starting point for building a web application with Firebase.

## Installation 
 Same as the develop branch
 
## Usage
To use this project skeleton with Firebase, you will need to:

1. Clone the firebase branch of the repository.
2. Initialize a new Firebase project and link it to your cloned repository.
3. Modify the Firebase configuration files to match your Firebase project settings.
4. Modify the application-specific files to fit your specific use case.
- For detailed instructions on how to use this project with Firebase, please see the [Firebase documentation](https://firebase.google.com/docs/functions/get-started).
  
  
## Project Structure
The project structure as follows:
 ```
 ├── src/
   ├── app/
      ── controllers/
      ── middleware/
      ── routes/
   ├── config/
      ── express/
      ── firebase/
   ├── utils/
     ── constants/
     ── enums/
     ── interface/
   ├──  app.ts
 ├── .env
 ├── .serviceAccountKey.json.example
   
 ```
- `src/app/` - This folder contains the application-specific files.
 - `src/app/controllers/` - This folder contains controllers that handle the application's business logic.
 - `src/app/middleware/` - This folder contains middleware files that can be used to modify incoming requests before they are handled by the     controllers.
 - `src/app/routes/` - This folder contains route files that map requests to the appropriate controller functions.
- `src/config/` - This folder contains configuration files that define how the application behaves.
- `src/config/express/` - This folder contains configuration files for the Express web server framework.
- `src/config/firebase/` -  This folder contains configuration files for Firebase.
- `src/utils/` - This folder contains utility files that can be used throughout the application.
- `src/utils/constants/` - This folder contains files defining constant values used throughout the application.
- `src/utils/enums/` - This folder contains files defining enum values used throughout the application.
- `src/utils/interface/` - This folder contains files defining interface types used throughout the application.
- `src/app.ts` - This file initializes the Express web server and loads the application-specific files.
- `.env` - This file contains environment variables used by the application.
- `.serviceAccountKey.json.example` - This file contains Firebase project configuration settings.

## Contributing
If you'd like to contribute to this project, please open an issue or submit a pull request. We welcome contributions from anyone!

## License

This project is licensed under the MIT License
