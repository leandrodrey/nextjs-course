import {NextApiRequest, NextApiResponse} from "next";
import {db} from "@/database";
import {Entry, IEntry} from "@/models";

type Data =
    | { message: string }
    | IEntry[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getEntries(res);
        case 'POST':
            return postEntry(req, res);
        case 'PUT':
            return postEntry(req, res);
        default:
            res.status(400).json({message: 'Endpoint doesnt exist'})
    }
}

const getEntries = async (res: NextApiResponse<Data>) => {

    await db.connect();
    const entries = await Entry.find().sort({createdAt: 'ascending'});
    await db.disconnect();

    return res.status(200).json(entries);
}

const postEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const {description = ''} = req.body;

    const newEntry = new Entry({
        description,
        createdAt: Date.now(),
    });

    try {
        await db.connect();
        await newEntry.save();
        await db.disconnect();
        return res.status(201).json( newEntry );
    } catch (e) {
        await db.disconnect();
        return res.status(500).json({message: 'Error saving entry'})
    }
}