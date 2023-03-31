# NodeJS-Skeleton
NodeJS-Skeleton is a RESTful API skeleton for a Node.js project using TypeScript and Prism ORM. It can be implemented with any web server framework or even  any user interface. The skeleton contains some essential files and folders that can be used as a starting point for building a web application.

## Installation 
To use this skeleton, you'll need to have Node.js and yarn (Yet Another Resource Negotiator) installed on your system. Once you have those, you can follow these steps:

1. Clone this repository to your local machine using git clone [https://github.com/Aashish-Dahal/NodeJS-Skeleton.git](https://github.com/Aashish-Dahal/NodeJS-Skeleton)
2. Navigate into the project directory with cd NodeJS-Skeleton
3. Install the project dependencies with the command:
  ```
  yarn setup 
  ```
4. Run Project Using the command:

  ```
  yarn dev
  ```
  
## Project Structure
The project structure as follows:
 ```
 ├── prisma/
 ├── src/
   ├── app/
      ── controllers/
      ── middleware/
      ── routes/
   ├── config/
      ── express/
      ── mysql/
      ── prisma/
   ├── utils/
     ── constants/
     ── enums/
     ── interface/
   ├──  app.ts
 ├── .env
   
 ```
- `prisma/` - This folder contains Prisma-related files, including migrations and the Prisma client instance.
- `src/app/` - This folder contains the application-specific files.
 - `src/app/controllers/` - This folder contains controllers that handle the application's business logic.
 - `src/app/middleware/` - This folder contains middleware files that can be used to modify incoming requests before they are handled by the     controllers.
 - `src/app/routes/` - This folder contains route files that map requests to the appropriate controller functions.
- `src/config/` - This folder contains configuration files that define how the application behaves.
- `src/config/express/` - This folder contains configuration files for the Express web server framework.
- `src/config/mysql/` - This folder contains configuration files for the MySQL database.
- `src/config/prisma/` - This folder contains configuration files for Prisma ORM.
- `src/utils/` - This folder contains utility files that can be used throughout the application.
- `src/utils/constants/` - This folder contains files defining constant values used throughout the application.
- `src/utils/enums/` - This folder contains files defining enum values used throughout the application.
- `src/utils/interface/` - This folder contains files defining interface types used throughout the application.
- `src/app.ts` - This file initializes the Express web server and loads the application-specific files.
- `.env` - This file contains environment variables used by the application.

## Contributing
If you'd like to contribute to this project, please open an issue or submit a pull request. We welcome contributions from anyone!

## License

This project is licensed under the MIT License
   
