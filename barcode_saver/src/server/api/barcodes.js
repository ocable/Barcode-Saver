const { ServerError } = require("../errors");
const prisma = require("../prisma");
const router = require("express").Router();
module.exports = router;

router.use((req, res, next) => {
  if (!res.locals.user) {
    return next(new ServerError(401, "You must be logged in."));
  }
  next();
});

router.get("/user", async (req, res, next) => {
  try {
    const id = res.locals.user.id;
    const user = await prisma.user.findUnique({ where: { id } });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.get("/user/barcodes", async (req, res, next) => {
  try {
    const id = res.locals.user.id;
    const barcodes = await prisma.barcode.findMany({ where: { userId: id } });
    res.json(barcodes);
  } catch (err) {
    next(err);
  }
});

router.post("/user/barcode", async (req, res, next) => {
  try {
    const id = res.locals.user.id;
    const barcode = await prisma.barcode.create({
      data: {},
    });
  } catch (err) {
    next(err);
  }
});
