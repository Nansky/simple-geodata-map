import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "~/server/db";

const handler =  async(req : NextApiRequest, res : NextApiResponse) => {
    const userdata = await db.user.findFirst({
        select: {
            username: true,
            passwordHash: true,
        },
    });
    
    
}

export default handler;