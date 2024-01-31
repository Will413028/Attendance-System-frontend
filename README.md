# Attendance-System-frontend

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.







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