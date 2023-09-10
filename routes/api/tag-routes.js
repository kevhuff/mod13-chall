const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  {
    tag_name: "Im a new tag"
  }
  Tag.create(req.body)
  res.status(200).json(tagData);
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, { where: { id: req.params.id } })
  res.status(200).json(tagData);
});

router.delete('/:id', (req, res) => {
  Tag.destroy({ where: { id: req.params.id } })
  res.status(200).json(tagData);
});

module.exports = router;
