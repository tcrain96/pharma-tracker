# Spring Boot, MongoDB, Angular Restful API 

A  full CRUD client tracking app utilizing Spring Boot for the back end server, and Angular for the front end application. 

## Demo

![Pharma Tracker Example](https://github.com/user-attachments/assets/1fafc39c-724d-4337-95e4-d423ea4a9f5d)

## Requirements

1. Java - 1.8.x

2. Maven - 3.x.x

3. MongoDB - 3.x.x

## Steps to Setup

**1. Clone the application**

```bash
git clone https://github.com/tcrain96/pharma-tracker.git
```

**2. Build and run the backend app using maven**

```bash
cd server
mvn spring-boot:run
```

The backend server will start at <http://localhost:8081>.

**3. Run the frontend app using ng**

```bash
cd client
npm install
```

```bash
ng serve --open
```

Frontend server will run on <http://localhost:4200>
