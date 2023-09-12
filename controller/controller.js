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

export const GetPerson = async (req, res) => {
    try {
      const person = await Person.findById(req.params.id);
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
      res.json(person);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
}

export const UpdatePerson = async (req, res) => {
    try {
      const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
      res.json(person);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
}


  
  