import { rest } from "msw";
import users from "./temp.json";

export const handlers = [
    rest.get('/userInfo', (req, res, ctx) => {
        return res(
            ctx.json(users)
        );
    }),
];