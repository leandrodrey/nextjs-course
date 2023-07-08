import {NextApiRequest, NextApiResponse} from "next";
import mongoose from "mongoose";
import {db} from "@/database";
import {Entry, IEntry} from "@/models";

type Data =
    | { message: string }
    | IEntry;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id } = req.query;

    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ message: 'Invalid id' + id });
    }

    switch (req.method) {
        case 'PUT':
            return updateEntry(req, res);
        case 'GET':
            return getEntry(req, res);
        default:
            res.status(400).json({message: 'Endpoint doesnt exist'})
    }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { id } = req.query;

    await db.connect();

    const entryToUpdate = await Entry.findById(id);

    if (!entryToUpdate) {
        await db.disconnect();
        return res.status(404).json({ message: 'Entry not found' });
    }

    const { description = entryToUpdate.description, status = entryToUpdate.status} = req.body;

    try {
        // entryToUpdate.description = description;
        // entryToUpdate.status = status;
        // await entryToUpdate.save();
        const updatedEntry = await Entry.findByIdAndUpdate(id, {description, status}, {runValidators: true, new: true});
        await db.disconnect();
        res.status(200).json(updatedEntry!);
    } catch (e: any) {
        await db.disconnect();
        return res.status(400).json({message: e.errors.status.message})
    }

}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

        const { id } = req.query;

        await db.connect();

        const entry = await Entry.findById(id);

        await db.disconnect();

        if (!entry) {
            return res.status(404).json({ message: 'Entry not found' });
        }

        return res.status(200).json(entry);
}