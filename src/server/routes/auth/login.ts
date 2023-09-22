import * as jwt from 'jsonwebtoken';
import config from '../../config';
import * as passport from 'passport';
import { Router } from 'express';
import { ReqUser } from '../../../types';


const router = Router();



router.post('/', passport.authenticate('local', { session: false }), async (req: ReqUser, res: any) => {
    try {
        const token = jwt.sign(
            { userid: req.user!.id, email: req.user!.email, role: 1 },
            config.jwt.secret!,
            { expiresIn: config.jwt.expires }
        );
        res.json(token);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "I'm learning to code :)" })
    }
});

export default router;