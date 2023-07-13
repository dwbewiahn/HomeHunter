# HomeHunter - Advanced Apartment Search Application

HomeHunter is a sophisticated web application designed to streamline and enhance the process of searching for apartments. The application empowers users to establish custom search filters and promptly notifies them when a new apartment that aligns with their filters is listed.

This project is a key component of the Project Factory course unit, a part of the Computer Engineering program at IADE. The project is being developed under the expert guidance of Professor Fábio Guilherme.

Project Contributor: Douglas Bewiahn - Student ID: 50038630

## Key Features

- User account creation and authentication: Allows users to create their own accounts and manage their sessions securely.
- Custom search filters: Users can define their own search parameters to find apartments that meet their specific needs.
- Real-time notifications: Users receive immediate notifications when new apartments matching their search filters are posted.

## Technologies Leveraged

- Python: The backend logic of the application is built using Python.
- Django: Django framework is used for handling requests and managing the database.
- HTML/CSS: The structure and style of the web pages are designed using HTML and CSS.
- JavaScript: Dynamic elements on the web pages are implemented using JavaScript.
- React: The frontend of the application is built using the React library for a smooth user experience.

## Setting Up the Development Environment

To set up the development environment for HomeHunter, follow the steps below:

1. Start the Django server: Navigate to the project directory and run the command `python manage.py runserver`.
2. Start the frontend: Navigate to the 'homehunter-frontend' directory and run the command `npm start`.
3. Start the Redis server: Run the command `redis-server`. You can check if it's working by running `redis-cli` and then `PING`.
4. Start the Celery worker: Run the command `celery -A HomeHunter worker --loglevel=info`.
5. Start the Celery beat: Run the command `celery -A HomeHunter beat --loglevel=info`.

