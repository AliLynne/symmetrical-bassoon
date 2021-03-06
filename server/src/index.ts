import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Request, Response } from "express";

import { Tag } from "./entity/Tag";
import { Event } from "./entity/Event";

const app = express();
app.use(express.json());

// Create Tag
app.post("/tags", async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const tag = Tag.create({ name });
    tag.name = name;
    await tag.save();
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Read all tags
app.get("/tags", async (req: Request, res: Response) => {
  try {
    const tags = await Tag.find();
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Read One Tag
app.get("/tags/:uuid", async (req: Request, res: Response) => {
  const id = req.params.uuid;
  try {
    const tag = await Tag.findOneOrFail({ id });
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update single Tag
app.put("/tags/:uuid", async (req: Request, res: Response) => {
  const id = req.params.uuid;
  const { name } = req.body;
  try {
    const tag = await Tag.findOneOrFail({ id });
    tag.name = name;
    await tag.save();
    res.status(201).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a single tag
app.delete("/tags/:uuid", async (req: Request, res: Response) => {
  const id = req.params.uuid;
  try {
    const result = await Tag.delete({ id });
    res.status(204).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create an event
app.post("/events", async (req: Request, res: Response) => {
  const { tags, dateTime } = req.body;
  console.log(tags[0]);

  try {
    const tagsList = [];
    tags.forEach(async (tag) => {
      const foundTag = await Tag.findOneOrFail({ id: tag });
      tagsList.push(foundTag);
    });
    const event = new Event({ tagsList, dateTime });
    await event.save();
    return res.status(200).json(event);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

createConnection()
  .then(async (connection) => {
    await connection.query(`create extension if not exists "uuid-ossp";`);
    app.listen(5000, () =>
      console.log(`Server running at http://localhost:5000`)
    );
  })
  .catch((error) => console.log(error));
