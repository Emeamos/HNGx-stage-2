import Person from "../model/person.js";

export const CreateNew = async(req, res) => {
    try {
      const person = new Person(req.body);
      await person.save();
      res.status(201).json(person);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  
  