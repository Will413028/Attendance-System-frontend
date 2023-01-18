# Attendance-System-frontend

## Demo Link

https://attendance-system.onrender.com

## Attendance-System-backend Proejct
https://github.com/Will413028/Attendance-System-backend
## How to run:

1. Clone Project    

    ```
    git clone https://github.com/Will413028/Attendance-System-frontend.git
    ```
2. go to project folder

    ```
    cd Attendance-System-frontend
    ```

3. Install Dependencies

    ```
    yarn install
    ``` 

4. Setup .env file
##### Important VITE_BACKEND_HOST Must be the same with Attendance-System-backend's host & port
    ```
    #.env example
    VITE_BACKEND_HOST=http://localhost:3000
    MODE=development
    ```
5. Run project

    ```
    yarn dev
    ```

## Test Account
    1. Admin user
        account: admin
        password: tiadmin
    2. Normal user
        account: user1
        password: titaner
        account: user2
        password: titaner
    3. Locked user
        account: user3
        password: titaner
        account: user4
        password: titaner