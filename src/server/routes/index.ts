import * as express from 'express';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

export default router;

// TEMPLATE:

// import { Router } from 'express';

// const router = Router();

// export default router;