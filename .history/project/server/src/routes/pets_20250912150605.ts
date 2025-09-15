import { Router } from 'express';
import PetProfile from '../models/PetProfile.js';

const router = Router();

// Create
router.post('/', async (req, res) => {
  try {
    const pet = await PetProfile.create(req.body);
    res.status(201).json(pet);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

// List
router.get('/', async (_req, res) => {
  const pets = await PetProfile.find().sort({ createdAt: -1 });
  res.json(pets);
});

// Get by id
router.get('/:id', async (req, res) => {
  const pet = await PetProfile.findById(req.params.id);
  if (!pet) return res.status(404).json({ error: 'Not found' });
  res.json(pet);
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const pet = await PetProfile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pet) return res.status(404).json({ error: 'Not found' });
    res.json(pet);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  const pet = await PetProfile.findByIdAndDelete(req.params.id);
  if (!pet) return res.status(404).json({ error: 'Not found' });
  res.json({ ok: true });
});

export default router;