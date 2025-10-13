# Fullstack Open - Part 11, Exercise 1

I pick Python with a REST API using FastAPI as my backend, which i integrate with Postgres via SQLAlchemy as my database. For my frontend i choose to work with React + Typescript.

- For the backend: I install `pylint`, then generate a .pylintrc file and load `pylint_fastapi_plugin` as a plus. For testing i install `pytest` and use `fastAPI` default testClient to simulate the application, since i also want to test how the requests work with the database in mind i can go two ways, the first one is to create mock objects using SQLAlchemy that allow me to test the functionalities by themselves, or i can create and init a testing database using Docker.
- For the frontend: I create a React + Typescript project using Vite, which should already configure `ESlint` to a good degree to start working on the app right away, the calls to the backend will be done using Axios, testing on the frontend can be done by testing each component using `vitest`. And also using `Playwright` for end-to-end testing.

For simplicity, the project is hosted on GitHub, each member from the team can work on their features by creating their own branch, then do a pull request whenever the code is done for merging into the main branch. As for if I would use another CI/CD tool, I could hook up the repository with Azure DevOps if hosting is done in the Azure Cloud. Googling for a bit, there are also other tools like CircleCI, which seems to be yet another platform for CI/CD ina cloud based platform I believe.

As for self hosting vs cloud based, I imagine it depends on the scale of the app, pricing in cloud based solutions can be hefty and if the app is not really used globally or does not benefit from the tools that allow for that kind of infrastructure first, i would prefer to self host first... At least where I live for now based on costs in cloud computing vs bill right now.
