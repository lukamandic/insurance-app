# Insurance app

## User stories

The app works as follows:
- as a user I want an ability to add a customer to the database that has these fields:
    1. Name
    2. Surname
    3. Email
    4. City
    5. Date of Birth
- as a user I want an ability to delete a customer
- as a user I want an ability to edit a customer
- as a user I want an ability to view the customer data on a screen and by a press
of a button view find out how much their insurance costs
- insurance cost is calculated on the backend and it depends on the customers
city and date of birth

## App setup

I am using Docker *version 20.10.21, build baeda1f* and using Docker Compose *version 1.27.4, build 40524192*

```
git clone
cd insurance-app
docker-compose build && docker-compose up
```

After that go to http://localhost:5173 and go! :)